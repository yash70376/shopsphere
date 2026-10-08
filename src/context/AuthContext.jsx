import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    // NEW FUNCTIONALITY: Login state ko change karna
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = {
        name: "Yash",
        email: "yash@example.com"
    };

    // NEW FUNCTIONALITY: User ko login karna
    function login() {
        setIsLoggedIn(true);
    }

    // NEW FUNCTIONALITY: User ko logout karna
    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;