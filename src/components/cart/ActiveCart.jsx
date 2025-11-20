import Button from "../Button";
import CartDetails from "../CartDetails";

function ActiveCart({ cart, total, onRemoveItemFromCart }) {
    return (
        <>
            <CartDetails
                cart={cart}
            
                total={total}
                onRemoveItemFromCart={onRemoveItemFromCart}
            />
            <CarbonNeutralMessage />
            <Button>Confirm here</Button>
        </>
    );
}

function CarbonNeutralMessage() {
    return (
        <div className="flex justify-center items-center text-red-900 bg-red-50 w-full h-12 my-6 gap-1 rounded-lg">
            <figure>
                <img
                    src="../../../assets/images/icon-carbon-neutral.svg"
                    alt="carbon-neutral icon"
                />
            </figure>
            <p>
                This is a <b>carbon-neutral</b> delivery
            </p>
        </div>
    );
}

export default ActiveCart;
