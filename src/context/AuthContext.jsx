import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = {
        name: "Yash",
        email: "yash@example.com"
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;