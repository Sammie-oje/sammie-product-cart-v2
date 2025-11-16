import "../../index.css";
import data from "../../data.json";
import { useState } from "react";

function ProductCard({
    product,
    onAddItemToCart,
    onUpdateQuantity,
    onHandleItemQuantity
}) {
    return (
        <article className="mb-6">
            <div
                className={`relative ${
                    onHandleItemQuantity(product.category) > 0
                        ? "border-2 border-red rounded-lg"
                        : ""
                }`}
            >
                <figure>
                    {/*Show appropriate image based on device width*/}
                    <picture>
                        <source
                            srcSet={product.image.mobile}
                            media="(min-width: 320px)"
                        />
                        <source
                            srcSet={product.image.tablet}
                            media="(min-width: 768px)"
                        />
                        <source
                            srcSet={product.image.desktop}
                            media="(min-width: 1280px)"
                        />
                        <img
                            src={product.image.mobile}
                            alt={product.category}
                            className="rounded-lg w-full"
                        />
                    </picture>
                </figure>
                {/*Render two separate elements depending on count */}
                {onHandleItemQuantity(product.category) === 0 ? (
                    <div
                        className="absolute-el bg-white flex items-center justify-center gap-2"
                        onClick={() => onAddItemToCart(product)}
                    >
                        <img
                            src="/assets/images/icon-add-to-cart.svg"
                            alt="Add-to-cart icon"
                        />
                        <span className="text-sm font-semibold">
                            Add to Cart
                        </span>
                    </div>
                ) : (
                    <div className="absolute-el bg-red border-none text-white flex justify-evenly items-center">
                        <button
                            className="border border-white rounded-full size-6 flex items-center justify-center"
                            onClick={() =>
                                onUpdateQuantity(product.category, -1)
                            }
                        >
                            <img
                                src="../../../assets/images/icon-decrement-quantity.svg"
                                alt="minus icon"
                            />
                        </button>
                        <span>{onHandleItemQuantity(product.category)}</span>
                        <button
                            className="border border-white rounded-full size-6 flex items-center justify-center"
                            onClick={() =>
                                onUpdateQuantity(product.category, 1)
                            }
                        >
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
                    {product.category}
                </p>
                <h3 className="text-base text-red-900 font-semibold">
                    {product.name}
                </h3>
                <span className="text-base text-red font-semibold">
                    ${product.price.toFixed(2)}
                </span>
            </div>
        </article>
    );
}

function Product({ onAddItemToCart, onUpdateQuantity, onHandleItemQuantity }) {
    return (
        <>
            {data.map(product => (
                <ProductCard
                    product={product}
                    key={product.category}
                    onAddItemToCart={onAddItemToCart}
                    onUpdateQuantity={onUpdateQuantity}
                    onHandleItemQuantity={onHandleItemQuantity}
                />
            ))}
        </>
    );
}

export default Product;
