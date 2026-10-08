import { useState, useContext } from "react";

import "./Login.css";

import AuthContext from "../../context/AuthContext";

function Login() {

    // NEW FUNCTIONALITY: Email ko React state se control karna
    const [email, setEmail] = useState("");

    // NEW FUNCTIONALITY: Password ko React state se control karna
    const [password, setPassword] = useState("");

    // NEW FUNCTIONALITY: Form validation errors store karna
    const [errors, setErrors] = useState({});

    // NEW FUNCTIONALITY: AuthContext se login function lena
    const { login } = useContext(AuthContext);

    // NEW FUNCTIONALITY: Email input ko state ke saath connect karna
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    // NEW FUNCTIONALITY: Password input ko state ke saath connect karna
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // NEW FUNCTIONALITY: Form validation
    function validateForm() {

        let newErrors = {};

        if (email.trim() === "") {
            newErrors.email = "Email is required";
        }

        if (password.trim() === "") {
            newErrors.password = "Password is required";
        }

        if (email !== "" && !email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (password !== "" && password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        return newErrors;
    }

    // NEW FUNCTIONALITY: Login form submit handle karna
    function handleSubmit(event) {

        event.preventDefault();

        const validationErrors = validateForm();

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            // NEW FUNCTIONALITY: Valid form ke baad user ko login karna
            login();

            console.log("Login data:");
            console.log("Email:", email);
            console.log("Password:", password);
        }
    }

    return (
        <main className="login-page">

            <div className="login-container">

                <h1>Login</h1>

                <p>Welcome back to ShopSphere</p>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />

                        {errors.email && (
                            <p className="form-error">
                                {errors.email}
                            </p>
                        )}

                    </div>

                    <div className="form-group">

                        <label htmlFor="password">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />

                        {errors.password && (
                            <p className="form-error">
                                {errors.password}
                            </p>
                        )}

                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </main>
    );
}

export default Login;