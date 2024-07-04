import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AUTH_PATHS } from "../../../Constants/path";
import Signin from "../pages/Signin";
// import AUTH


const AuthRoute:FunctionComponent<Record<string, never>> = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path={AUTH_PATHS.SIGNIN} element={<Signin />} />
            </Route>

            <Route
                path="*"
                element={
                <div
                    style={{
                    width: "50%",
                    margin: "5em auto",
                    textAlign: "center",
                    }}
                >
                    <p>Oopppss, you seem to be lost</p>
                </div>
                }
            />
        </Routes>
  
    )
}

export default AuthRoute