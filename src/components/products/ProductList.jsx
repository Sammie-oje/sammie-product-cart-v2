import Product from "./Product";

function ProductList() {
  return (
    <section>
      <h1 className="font-bold text-4xl mb-8">Desserts</h1>
      <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-y-8">
        <Product />
      </div>
    </section>
  );
}

export default ProductList;
