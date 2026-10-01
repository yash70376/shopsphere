import "./Signup.css";

function Signup() {

    return (
        <main className="signup-page">

            <div className="signup-card">

                <div className="signup-header">

                    <h1>Create Account</h1>

                    <p>
                        Create your ShopSphere account
                    </p>

                </div>


                <form className="signup-form">

                    <div className="form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                        />

                    </div>


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


                    <div className="form-group">

                        <label>Confirm Password</label>

                        <input
                            type="password"
                            placeholder="Confirm your password"
                        />

                    </div>


                    <button type="submit">
                        Create Account
                    </button>

                </form>


                <div className="login-link">

                    <p>
                        Already have an account?
                        <a href="#"> Login</a>
                    </p>

                </div>

            </div>

        </main>
    );
}

export default Signup;