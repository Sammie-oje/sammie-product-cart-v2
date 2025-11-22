import Button from "../Button";
import CartDetails from "../CartDetails";

{
    /*This component shows and renders the data in the cart in a UI friendly way*/
}
function ActiveCart({
    cart,
    total,
    onRemoveItemFromCart,
    isModalToTrue,
    isModal
}) {
    return (
        <>
            <CartDetails
                cart={cart}
                total={total}
                onRemoveItemFromCart={onRemoveItemFromCart}
                isModal={isModal}
            />
            <CarbonNeutralMessage />
            <Button handleClick={isModalToTrue}>Confirm here</Button>
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
