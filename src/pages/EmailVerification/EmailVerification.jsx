import "./EmailVerification.css";

function EmailVerification() {
    return (
        <main className="email-verification-page">

            <div className="email-verification-card">

                <div className="email-verification-header">

                    <div className="email-icon">
                        ✉️
                    </div>

                    <h1>Email Verification</h1>

                    <p>
                        We've sent a verification link to your email address.
                    </p>

                </div>


                <div className="verification-message">

                    <p>
                        Please check your inbox and click the
                        verification link to verify your account.
                    </p>

                </div>


                <button className="resend-button">
                    Resend Email
                </button>


                <div className="back-to-login">

                    <a href="#">
                        ← Back to Login
                    </a>

                </div>

            </div>

        </main>
    );
}

export default EmailVerification;