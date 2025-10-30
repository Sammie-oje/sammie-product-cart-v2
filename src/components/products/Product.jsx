import data from "../../data.json";

function Product() {
  const product = data.map((item) => (
    <article key={item.category} className="mb-6">
      <div className="relative">
        <figure>
          <img
            src={`${item.image.mobile}`}
            alt=""
            className="w-full rounded-lg"
          />
        </figure>
        <button className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 flex items-center justify-center gap-2 border border-red-400 hover:border-red hover:text-red bg-white w-40 h-[2.75em] rounded-full cursor-pointer ">
          <img
            src="../../../assets/images/icon-add-to-cart.svg"
            alt="Add-to-cart icon"
          />
          <span className="text-sm font-semibold">Add to Cart</span>
        </button>
      </div>

      <div className="mt-7">
        <p
          className="text-sm text-red-500 font-light mb-1
        "
        >
          {item.category}
        </p>
        <h3 className="text-base text-red-900 font-semibold">{item.name}</h3>
        <span className="text-base text-red font-semibold">
          ${item.price.toFixed(2)}
        </span>
      </div>
    </article>
  ));

  return <>{product}</>;
}

export default Product;
