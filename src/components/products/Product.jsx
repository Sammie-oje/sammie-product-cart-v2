import data from "../../data.json";
import "../../index.css";
import { useState } from "react";

function ProductCard({ item }) {
    const [count, setCount] = useState(0);

    return (
        <article key={item.category} className="mb-6">
            <div
                className={`relative ${
                    count > 0 ? "border-2 border-red rounded-lg" : ""
                }`}
            >
                <figure>
                    {/*Show appropriate image based on device width*/}
                    <picture>
                        <source
                            srcSet={item.image.mobile}
                            media="(min-width: 320px)"
                        />
                        <source
                            srcSet={item.image.tablet}
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet={item.image.desktop}
                            media="(min-width: 1280px)"
                        />
                        <img
                            src={item.image.mobile}
                            alt={item.category}
                            className="rounded-lg w-full"
                        />
                    </picture>
                </figure>
                {/*Render two separate elements depending on count */}
                {count === 0 ? (
                    <div
                        className="absolute-el bg-white flex items-center justify-center gap-2"
                        onClick={() => setCount(1)}
                    >
                        <img
                            src="../../../assets/images/icon-add-to-cart.svg"
                            alt="Add-to-cart icon"
                        />
                        <span className="text-sm font-semibold">
                            Add to Cart
                        </span>
                    </div>
                ) : (
                    <div className="absolute-el bg-red border-none text-white flex justify-evenly items-center">
                        <button className="border border-white rounded-full size-6 flex items-center justify-center" onClick={() => setCount(count - 1)}>
                            <img
                                src="../../../assets/images/icon-decrement-quantity.svg"
                                alt="minus icon"
                            />
                        </button>
                        <span>{count}</span>
                        <button className="border border-white rounded-full size-6 flex items-center justify-center" onClick={() => setCount(count + 1)}>
                            <img
                                src="../../../assets/images/icon-increment-quantity.svg"
                                alt="plus icon"
                            />
                        </button>
                    </div>
                )}
            </div>

            <div className="mt-7">
                <p
                    className="text-sm text-red-500 font-light mb-1
      "
                >
                    {item.category}
                </p>
                <h3 className="text-base text-red-900 font-semibold">
                    {item.name}
                </h3>
                <span className="text-base text-red font-semibold">
                    ${item.price.toFixed(2)}
                </span>
            </div>
        </article>
    );
}

function Product() {
    return (
        <>
            {data.map(item => (
                <ProductCard item={item} />
            ))}
        </>
    );
}

export default Product;
