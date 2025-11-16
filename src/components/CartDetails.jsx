function CartDetails() {
    return (
        <>
            <ul>
                <ProductSummary />
            </ul>
            <OrderSummary />
        </>
    );
}

function ProductSummary() {
    return (
        <li>
            <hr className="border-red-100 my-4 border-[0.1em]" />
        </li>
    );
}

function OrderSummary() {
    return (
        <div className="flex justify-between items-center mt-2 text-red-900 ">
            <p className="text-sm">Order Total</p>
            <span className="text-2xl font-bold">${0}</span>
        </div>
    );
}

export default CartDetails;
