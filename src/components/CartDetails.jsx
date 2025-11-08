function CartDetails() {
    return (
        <>
            <ProductSummary />
            <OrderSummary />
        </>
    );
}

function ProductSummary() {}

function OrderSummary() {
    return (
        <div className="flex justify-between items-center mt-2 text-red-900 ">
            <p className="text-sm">Order Total</p>
            <span className="text-2xl font-bold">${0}</span>
        </div>
    );
}

export default CartDetails;
