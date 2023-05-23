import axios from "axios";

import Cookies, { cookieKeys } from "./cookies";

// TODO: check this before deploy
const API_URL = `${process.env.REACT_APP_BASE_API_URL}/api`;

class Axios {
    constructor(baseURL) {
        this.axios = axios.create({
            baseURL,
        });

        this.axios.interceptors.request.use(this._requestMiddleware);

        this.axios.interceptors.response.use(
            this._responseMiddleware,
            this._responseErr
        );
    }

    _requestMiddleware = req => {
        // Send Bearer token on every request
        const token = Cookies.get(cookieKeys.Token);
        if (!!token) req.headers.AuthToken = token;
        return req;
    };

    _responseMiddleware = response => {
        //  Do something on every success full response
        return response;
    };

    _responseErr = error => {
        if (error?.response?.status === 401) {
            //   Logout / Redirect

            //   EX:
            //   Cookies.clear();
            //   store.dispatch(logout());
            return Promise.reject(error);
        }
        return Promise.reject(error);
    };
}

const axiosPeople = new Axios(API_URL).axios;

export { axiosPeople };
