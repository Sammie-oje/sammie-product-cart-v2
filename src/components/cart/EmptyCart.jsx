function EmptyCart() {
    return (
        <div>
            <img
                src="../../../assets/images/illustration-empty-cart.svg"
                alt="empty-cart illustration"
                className="mx-auto"
            />
            <p className="text-sm font-semibold text-red-500 text-center">
                Your added items will appear here
            </p>
        </div>
    );
}

export default EmptyCart;
