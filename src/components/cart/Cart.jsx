import EmptyCart from "./EmptyCart";
import ActiveCart from "./ActiveCart";

function Cart({ cart, onGetItemQuantity, total, totalItem,onRemoveItemFromCart }) {
    return (
        <section className="bg-white w-full rounded-xl p-6 min-h-[299px] lg:max-w-[384px]">
            <h2 className="text-2xl font-bold text-red mb-6">
                Your Cart ({totalItem})
            </h2>
            {totalItem === 0 ? <EmptyCart /> : <ActiveCart cart={cart} total={total} onRemoveItemFromCart={onRemoveItemFromCart}/>}
        </section>
    );
}

export default Cart;
