import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "routes";
import Cookies from "services/cookies";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const token = Cookies.get("token");
        console.log("token", token);
    }, []);

    return <><Routes /><ToastContainer /></>;
};

export default App;
