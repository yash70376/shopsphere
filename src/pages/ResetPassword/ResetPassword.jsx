import "./ResetPassword.css";

function ResetPassword() {

    return (
        <main className="reset-password-page">

            <div className="reset-password-card">

                <div className="reset-password-header">

                    <h1>Reset Password</h1>

                    <p>
                        Create a new password for your account
                    </p>

                </div>


                <form className="reset-password-form">

                    <div className="form-group">

                        <label>New Password</label>

                        <input
                            type="password"
                            placeholder="Enter your new password"
                        />

                    </div>


                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your new password"
                        />

                    </div>


                    <button type="submit">
                        Reset Password
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

export default ResetPassword;