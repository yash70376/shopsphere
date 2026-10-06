import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const user = {
        name: "Yash",
        email: "yash@example.com"
    };

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;