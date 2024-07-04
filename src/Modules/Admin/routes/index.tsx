import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { AUTH_PATHS } from "../../../Constants/path";

// import AUTH


const AdminDashboardRoute:FunctionComponent<Record<string, never>> = () => {
    return(
        <Routes>
            <Route path="/">
                {/* <Route path={AUTH_PATHS.SIGNIN} element={<Signin />} /> */}
            </Route>
        </Routes>
    )
}

export default AdminDashboardRoute