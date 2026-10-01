import "./ProfileInfo.css";

function ProfileInfo() {

    let user = {
        name: "Yash Kumar",
        email: "yash@example.com",
        phone: "9876543210",
        image: "https://i.pravatar.cc/150?img=12"
    };

    return (
        <section className="profile-info">

            <div className="profile-image">
                <img
                    src={user.image}
                    alt={user.name}
                />
            </div>

            <div className="profile-details">

                <h2>{user.name}</h2>

                <p>
                    <strong>Email:</strong> {user.email}
                </p>

                <p>
                    <strong>Phone:</strong> {user.phone}
                </p>

                <button>
                    Edit Profile
                </button>

            </div>

        </section>
    );
}

export default ProfileInfo;