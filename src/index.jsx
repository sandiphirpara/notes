import App from "App";
import "bootstrap/dist/css/bootstrap.min.css";
import "index.css";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store";

ReactDOMClient.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
