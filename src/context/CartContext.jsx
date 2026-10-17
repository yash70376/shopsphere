
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// Shared cart state provide karna
function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Cart mein product add ya quantity update karna
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

    // Cart se product remove karna
    function removeFromCart(productId) {
        setCartItems(function(previousItems) {
            return previousItems.filter(function(item) {
                return item.id !== productId;
            });
        });
    }

    // NEW: Product ki quantity update karna
    function updateCartQuantity(productId, newQuantity) {
        if (newQuantity < 1) {
            return;
        }

        setCartItems(function(previousItems) {
            return previousItems.map(function(item) {
                if (item.id === productId) {
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }

                return item;
            });
        });
    }

    // Cart mein total units count karna
    const cartCount = cartItems.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                addToCart,
                removeFromCart,
                updateCartQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Components ko shared cart access dena
function useCart() {
    return useContext(CartContext);
}

export { CartProvider, useCart };
