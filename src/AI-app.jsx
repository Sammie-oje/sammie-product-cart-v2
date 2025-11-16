import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=300&h=240&fit=crop"
  },
  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.00,
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=300&h=240&fit=crop"
  },
  {
    id: 3,
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.00,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=240&fit=crop"
  },
  {
    id: 4,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=240&fit=crop"
  },
  {
    id: 5,
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300&h=240&fit=crop"
  },
  {
    id: 6,
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.00,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=240&fit=crop"
  },
  {
    id: 7,
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300&h=240&fit=crop"
  },
  {
    id: 8,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=240&fit=crop"
  },
  {
    id: 9,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=240&fit=crop"
  }
];

export default function ProductCart() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getItemQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const confirmOrder = () => {
    setShowModal(true);
  };

  const startNewOrder = () => {
    setCart([]);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-rose-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Desserts</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map(product => {
                const quantity = getItemQuantity(product.id);
                return (
                  <div key={product.id} className="group">
                    <div className="relative mb-8">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-56 object-cover rounded-lg transition-all ${
                          quantity > 0 ? 'ring-2 ring-red-500' : ''
                        }`}
                      />
                      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40">
                        {quantity === 0 ? (
                          <button
                            onClick={() => addToCart(product)}
                            className="w-full bg-white hover:bg-red-50 border-2 border-gray-300 hover:border-red-500 rounded-full py-3 px-6 flex items-center justify-center gap-2 font-semibold text-gray-900 transition-all shadow-md"
                          >
                            <ShoppingCart size={18} className="text-red-500" />
                            Add to Cart
                          </button>
                        ) : (
                          <div className="w-full bg-red-500 rounded-full py-3 px-6 flex items-center justify-between text-white shadow-md">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="hover:bg-white hover:text-red-500 rounded-full p-1 transition-colors border border-white"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="font-semibold">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="hover:bg-white hover:text-red-500 rounded-full p-1 transition-colors border border-white"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{product.category}</p>
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-red-500 font-semibold">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-red-500 mb-6">
                Your Cart ({totalItems})
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop"
                    alt="Empty cart"
                    className="w-32 h-32 mx-auto mb-4 opacity-50 rounded-full object-cover"
                  />
                  <p className="text-gray-500">Your added items will appear here</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-red-500 font-semibold">{item.quantity}x</span>
                            <span className="text-gray-500">@ ${item.price.toFixed(2)}</span>
                            <span className="font-semibold text-gray-700">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-4 text-gray-400 hover:text-red-500 border border-gray-300 hover:border-red-500 rounded-full p-1 transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6 text-lg">
                    <span className="text-gray-900">Order Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="bg-rose-50 rounded-lg p-4 mb-6 flex items-center gap-2">
                    <span className="text-2xl">🌳</span>
                    <p className="text-sm text-gray-700">
                      This is a <span className="font-semibold">carbon-neutral</span> delivery
                    </p>
                  </div>

                  <button
                    onClick={confirmOrder}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-full transition-colors"
                  >
                    Confirm Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmed Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed</h2>
            <p className="text-gray-500 mb-6">We hope you enjoy your food!</p>

            <div className="bg-rose-50 rounded-lg p-4 mb-6 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex items-center gap-4 border-b border-rose-100 pb-4 last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-red-500 font-semibold">{item.quantity}x</span>
                      <span className="text-gray-500">@ ${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between pt-4">
                <span className="text-gray-900">Order Total</span>
                <span className="text-2xl font-bold text-gray-900">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={startNewOrder}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-full transition-colors"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}