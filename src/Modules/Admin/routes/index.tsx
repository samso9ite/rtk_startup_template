import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { ADMIN_PATHS, AUTH_PATHS } from "../../../Constants/path";
import Signin from "../../Auth/pages/Signin";
import Overview from "../pages/overview";

// import AUTH


const AdminDashboardRoute:FunctionComponent<Record<string, never>> = () => {
    return(
        <Routes>
            <Route path="/">
                <Route path={ADMIN_PATHS.OVERVIEW} element={<Overview />} />
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

export default AdminDashboardRoute