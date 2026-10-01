import "./AccountSettings.css";

function AccountSettings() {

    return (
        <section className="account-settings">

            <h2>Account Settings</h2>

            <div className="setting-item">

                <div>
                    <h3>Change Password</h3>
                    <p>Update your account password</p>
                </div>

                <button>
                    Change
                </button>

            </div>

            <div className="setting-item">

                <div>
                    <h3>Email Address</h3>
                    <p>Manage your email address</p>
                </div>

                <button>
                    Manage
                </button>

            </div>

            <div className="setting-item">

                <div>
                    <h3>Phone Number</h3>
                    <p>Manage your phone number</p>
                </div>

                <button>
                    Manage
                </button>

            </div>

        </section>
    );
}

export default AccountSettings;