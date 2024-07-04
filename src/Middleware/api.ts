import {BaseQueryFn, 
    FetchArgs,
    FetchBaseQueryError,
    fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Mutex } from "async-mutex"

const mutex = new Mutex()
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
        let storedToken = localStorage.getItem("cwr_u")
        const token = storedToken ? JSON.parse(storedToken) : null

        // Pass the token to headers if token is available
        if (token){
            const authorizationKey = token.token.access
            headers.set("Authorization", `Bearer ${authorizationKey}`)
        }
        headers.set('Content-Type', 'application/json');
        headers.set("Access-Key", "Gi7RWQpp.IROvFJBUYn0j4vgJW7zSt8dBZojNFkty" || "");
        return headers
    }
})

const customFetchBase:BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError> = async (args, api, extraOptions) => {
        // Wait until mutex is available without unlocking it 
        await mutex.waitForUnlock()
        let result = await baseQuery(args, api, extraOptions);
        if (result.error && result.error?.status === 401){
            
            if(!mutex.isLocked()){
                const release = await mutex.acquire();
                try{
                    const refreshResult = await baseQuery(
                        {credentials:"include", url:"auth/refresh"},
                        api,
                        extraOptions
                    );

                    if (refreshResult.data){
                        // Retry the initial query
                        result = await baseQuery(args, api, extraOptions)
                    }else{
                        // window.location.href = "/auth/signin",
                        localStorage.removeItem("cwr_u")
                        localStorage.removeItem("clu")
                    }
                }finally{
                    release()
                }
            }else{
                await mutex.waitForUnlock();
                result = await baseQuery(args, api, extraOptions);
            }
        }
        return result;
    }

export default customFetchBase
