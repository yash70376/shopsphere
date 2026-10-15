
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
    return (
        // NEW FUNCTIONALITY: Shared cart state ko app mein provide karna
        <CartProvider>
            <Navbar />
            <Products />
            <Cart />
        </CartProvider>
    );
}

export default App;
