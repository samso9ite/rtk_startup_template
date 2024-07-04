import React from "react";
import { BASE_PATHS } from "./path";
import AuthRoute from "../Modules/Auth/routes";
import AdminDashboardRoute from "../Modules/Admin/routes";
import AdminDashboardLayout from "../Layout/AdminDashboardLayout";
// import Auth

type Props = {
    path: string,
    Component: React.FunctionComponent<Record<string, never>>;
    Layout: React.FunctionComponent<any>|null;
    useAuth: boolean
}

export const BASE_ROUTES: Props[] = [
    {
        path: `${BASE_PATHS.AUTH}/*`,
        Component: AuthRoute,
        Layout: null,
        useAuth: false
    },
    {
        path: `${BASE_PATHS.APP}/*`,
        Component: AdminDashboardRoute,
        Layout: AdminDashboardLayout,
        useAuth: true
    }
]