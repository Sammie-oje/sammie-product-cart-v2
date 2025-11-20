function CartDetails({ cart, total, onRemoveItemFromCart }) {
    return (
        <>
            <ul>
                {cart.map(item => (
                    <ProductSummary
                        item={item}
                        key={item.id}
                        onRemoveItemFromCart={onRemoveItemFromCart}
                    />
                ))}
            </ul>
            <OrderSummary total={total} />
        </>
    );
}

function ProductSummary({ item, onRemoveItemFromCart }) {
    return (
        <>
            <li className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-sm text-red-900 font-semibold">
                        {item.name}
                    </h3>
                    <p className="text-sm">
                        <span className="font-bold mr-2.5 text-red">
                            {item.quantity}x
                        </span>
                        <span className="mr-1.5 ">@ ${item.price}</span>
                        <span className="font-bold text-red-500">
                            ${(item.quantity * item.price).toFixed(2)}
                        </span>
                    </p>
                </div>

                <button
                    onClick={() => onRemoveItemFromCart(item.id)}
                    className="grid place-items-center group size-5 border border-red-400 rounded-full hover:border-red-900 hover:stroke-red-900 cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 10 10"
                    >
                        <path
                        className="group-hover:fill-red-900"
                            fill="#CAAFA7"
                            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                        />
                    </svg>
                </button>
            </li>
            <hr className="border-red-100 my-4 border-[1px]" />
        </>
    );
}

function OrderSummary({ total }) {
    return (
        <div className="flex justify-between items-center mt-2 text-red-900 ">
            <p className="text-sm">Order Total</p>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
        </div>
    );
}

export default CartDetails;
