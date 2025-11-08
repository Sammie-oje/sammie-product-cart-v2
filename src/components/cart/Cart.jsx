import EmptyCart from "./EmptyCart";
import ActiveCart from "./ActiveCart";

function Cart() {
    return (
        <section className="bg-white w-full rounded-xl p-6 min-h-[299px] lg:max-w-[384px]">
            <h2 className="text-2xl font-bold text-red mb-6">
                Your Cart ({0})
            </h2>
            <EmptyCart />
            <ActiveCart/>
        </section>
    );
}

export default Cart;
