function EmptyCart() {
  return (
    <section className="bg-white w-full rounded-xl p-6 min-h-[299px] lg:max-w-[384px]">
      <h2 className="text-2xl font-bold text-red mb-6">Your Cart ({0})</h2>
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
    </section>
  );
}

export default EmptyCart;
