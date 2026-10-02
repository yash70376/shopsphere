import "./ForgotPassword.css";

function ForgotPassword() {

    return (
        <main className="forgot-password-page">

            <div className="forgot-password-card">

                <div className="forgot-password-header">

                    <h1>Forgot Password?</h1>

                    <p>
                        Enter your email to reset your password
                    </p>

                </div>


                <form className="forgot-password-form">

                    <div className="form-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                    </div>


                    <button type="submit">
                        Send Reset Link
                    </button>

                </form>


                <div className="back-to-login">

                    <a href="#">
                        ← Back to Login
                    </a>

                </div>

            </div>

        </main>
    );
}

export default ForgotPassword;