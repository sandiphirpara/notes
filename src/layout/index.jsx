import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => {
    const [isAuth, setIsAuth] = useState(true);
    const getTempUrl = window.location.pathname;

    useEffect(() => {
        console.log("getTempUrl",getTempUrl);
        if (getTempUrl === "/login" || getTempUrl === "/") {
            setIsAuth(false);
        } else {
            setIsAuth(true);
        }
    }, [getTempUrl]);

    return isAuth ? (
        <>
            <div className="main_wrapper">
                <div className="container">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </>
    ) : (
        <Outlet />
    );
};

export default Layout;
