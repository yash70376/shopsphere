import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/Navbar/Navbar";

function App() {

    return (
        <>
            <Navbar/>
            <Products />
            <Cart/>
             <ProductDetails/>
            
        </>
    );
}

export default App;