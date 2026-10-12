
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// NEW FUNCTIONALITY: Shared cart state provide karna
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // NEW FUNCTIONALITY: Cart mein product add ya quantity update karna
    function addToCart(product, quantity = 1) {
        setCartItems(function(previousItems) {
            const existingItem = previousItems.find(function(item) {
                return item.id === product.id;
            });

            if (existingItem) {
                return previousItems.map(function(item) {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity
                        };
                    }

                    return item;
                });
            }

            return [
                ...previousItems,
                { ...product, quantity }
            ];
        });
    }

    // NEW FUNCTIONALITY: Cart se product remove karna
    function removeFromCart(productId) {
        setCartItems(function(previousItems) {
            return previousItems.filter(function(item) {
                return item.id !== productId;
            });
        });
    }

    // NEW FUNCTIONALITY: Cart mein total units count karna
    const cartCount = cartItems.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                addToCart,
                removeFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// NEW FUNCTIONALITY: Components ko shared cart access dena
function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };
