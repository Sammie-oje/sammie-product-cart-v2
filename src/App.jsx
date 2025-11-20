import { useState } from "react";
import ProductList from "./components/products/ProductList";
import Cart from "./components/cart/Cart";

function App() {
    {
        /*State to manage cart items and products*/
    }
    const [cart, setCart] = useState([]);
    {
        /*State to manage modal appearance*/
    }
    const [isModal, setIsModal] = useState(false);
    {
        /*Add item to cart*/
    }
    const handleAddItemToCart = product => {
        setCart(curCart => [
            ...curCart,
            {
                id: product.category,
                image: product.image.thumbnail,
                name: product.name,
                price: product.price,
                quantity: 1
            }
        ]);
    };

    {
        /*Update the quantity of the item being passed in based on the change param*/
    }
    const handleUpdateQuantity = (productId, change) => {
        setCart(curCart =>
            curCart
                .map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + change }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };
    {
        /*This function gets the product's quantity whose id is passed aw the parameter*/
    }
    const handleGetItemQuantity = productId => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    {
        /*Calculate and get the sum of the total quantity * the price*/
    }
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    {
        /*Calculate and get the total quantity in the cart*/
    }
    const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);

    {
        /*Remove item from cart*/
    }
    const removeItemFromCart = productId => {
        setCart(cart.filter(item => item.id !== productId));
}

    return (
        <>
            <ProductList
                onAddItemToCart={handleAddItemToCart}
                onUpdateQuantity={handleUpdateQuantity}
                onGetItemQuantity={handleGetItemQuantity}
            />
            <Cart
                cart={cart}
                onGetItemQuantity={handleGetItemQuantity}
                total={total}
                totalItem={totalItem}
                onRemoveItemFromCart ={removeItemFromCart}
            />
        </>
    );
}

export default App;
