import "./Login.css";

function Login() {

    return (
        <main className="login-page">

            <div className="login-card">

                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Login to your ShopSphere account</p>
                </div>

                <form className="login-form">

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">
                        Login
                    </button>

                </form>

                <div className="signup-link">
                    <p>
                        Don't have an account?
                        <a href="#"> Signup</a>
                    </p>
                </div>

            </div>

        </main>
    );
}

export default Login;