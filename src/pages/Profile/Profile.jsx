import "./Profile.css";

import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import AccountSettings from "../../components/AccountSettings/AccountSettings";

function Profile() {

    return (
        <main className="profile-page">

            <div className="profile-header">
                <h1>My Profile</h1>
                <p>Manage your account information</p>
            </div>

            <div className="profile-content">

                <ProfileInfo />

                <AccountSettings />

            </div>

        </main>
    );
}

export default Profile;