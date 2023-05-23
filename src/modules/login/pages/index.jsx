import styles from "./index.module.css";
import LoginImage from "../../../assets/images/login-banner.png";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { useSelector } from "react-redux";
import TextInput from "components/Form/TextInput";
import PrimaryButton from "components/Button/PrimaryButton";
import Form from "components/Form/Form";

const validationSchema = Yup.object().shape({
    email: Yup.string().trim().required("email address is required."),
    password:Yup.string().trim().required("password address is required."),
});

const initialValues = {
    email: "",
    password:"",
};

const Login = () => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: values => {     
            //disptch login api       
            console.log(values);
            window.location.replace('/dashboard');
        },
    });

    return (
        <div className={styles.main_login_wrapper}>
            <div className={styles.login_banner}>
                <img src={LoginImage} alt="Login" />
            </div>
            <div className={styles.login_wrapper}>
                <div className={styles.login_details}>
                    <h1>Login</h1>
                    <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries
                    </p>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="form-text">
                            <TextInput
                                type="text"
                                placeholder="Enter Your Email Address"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    !!formik.errors.email &&
                                    !!formik.touched.email
                                        ? formik.errors.email
                                        : ""
                                }
                            />
                        </div>
                        <div className="form-text">
                            <TextInput
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={
                                    !!formik.errors.password &&
                                    !!formik.touched.password
                                        ? formik.errors.password
                                        : ""
                                }
                            />
                        </div>
                        <PrimaryButton
                            type="submit"
                            className={styles.btn_long}
                        >
                            Login
                        </PrimaryButton>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
