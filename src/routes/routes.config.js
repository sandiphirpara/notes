import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouteConstants } from "./RouteConstants";

import RequiredAuth from "components/common/RequiredAuth";
import Unauthorized from "components/common/Unauthorized";
import _404 from "components/common/_404";

// Use lazy loaded pages

const Dashboard = lazy(() => import("modules/dashboard/pages"));
const AddEditNotes = lazy(() => import("modules/dashboard/components/AddEditNotes"));
const Login = lazy(() => import("modules/login/pages"))

const routesConfig = {
    common: [
        {
            path: "unauthorized",
            component: Unauthorized,
        },
        { path: "*", component: _404 },
    ],
    private: [
        {
            path: "/",
            component: RequiredAuth,
            children: [
                {
                    index: true,
                    component: Login,
                },
                { component: () => <Login /> },
            ],
        },
        {
            path: "/dashboard",
            component: RequiredAuth,
            children: [
                {
                    index: true,
                    component: Dashboard,
                },
                { path: ":id", component: () => <Dashboard /> },
            ],
        },
        {
            path: "/AddEditNotes",
            component: RequiredAuth,
            children: [
                {
                    index: true,
                    component: AddEditNotes,
                },
                { path: ":id", component: () => <AddEditNotes /> },
            ],
        },
    ],
    public: [
        {
            path: RouteConstants?.login,
            component: Outlet,
            children: [{ index: true, component: () => <Login /> }],
        },
        {
            path: "*",
            component: <Navigate to={RouteConstants.dashboard} />,
        },
    ],
};

export default routesConfig;
