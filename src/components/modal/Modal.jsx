import Button from "../Button";
import CartDetails from "../CartDetails";

function Modal({ isModalToFalse, cart, total, isModal}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] z-10">
            <div
                role="dialog"
                aria-labelledby="order-confirmed-modal"
                aria-modal="true"
                className="fixed top-25 bg-white w-full h-full py-10 px-6  rounded-t-xl z-20 md:top-1/2 md:left-1/2 md:translate-[-50%] md:w-[592px] md:h-auto md:rounded-xl"
            >
                <div>
                    <img
                        src="assets/images/icon-order-confirmed.svg"
                        alt="order-confirmed-icon"
                    />
                    <h2 className="text-4xl leading-normal text-rex-900 font-bold mt-6">
                        Order Confirmed
                    </h2>
                    <p className="text-base text-red-500 mt-2">
                        We hope you enjoy your food!
                    </p>
                </div>

                <div className="w-full p-6 my-8 rounded-lg bg-red-50">
                    <CartDetails cart={cart} total={total} isModal={isModal} />
                </div>

                <Button handleClick={isModalToFalse}>Start New Order</Button>
            </div>
        </div>
    );
}

export default Modal;
