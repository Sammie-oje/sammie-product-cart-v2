import Product from "./Product";

function ProductList({
    data,
    onAddItemToCart,
    onUpdateQuantity,
    onHandleItemQuantity
}) {
    return (
        <section>
            <h1 className="font-bold text-4xl mb-8">Desserts</h1>
            <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
                <Product
                    onAddItemToCart={onAddItemToCart}
                    onUpdateQuantity={onUpdateQuantity}
                    onHandleItemQuantity={onHandleItemQuantity}
                />
            </div>
        </section>
    );
}

export default ProductList;
