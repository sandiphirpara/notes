import { USER_LOGIN } from "./actionTypes";

export const userLogin = data => ({
    type: USER_LOGIN,
    payload: data,
});
