import { X, CreditCard, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useStore } from '../store/useStore';

export function Checkout({ onClose }) {
  const { cart, user, addOrder, clearCart } = useStore();
  const [step, setStep] = useState('shipping');
  const [shippingAddress, setShippingAddress] = useState({
    fullName: user?.name || '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 10;
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
    // Create order
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      userId: user?.id || 'guest',
      items: cart,
      total: grandTotal,
      status: 'pending',
      date: new Date().toISOString(),
      shippingAddress,
    };
    
    addOrder(order);
    clearCart();
    setStep('confirmation');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-8">
            {step === 'confirmation' ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Order Confirmed!
                </h2>
                <p className="text-gray-600 mb-8">
                  Thank you for your purchase. Your order has been successfully placed.
                </p>
                <button
                  onClick={onClose}
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>

                  {/* Steps */}
                  <div className="flex items-center mb-8">
                    <div className={`flex items-center ${step !== 'shipping' ? 'text-green-600' : 'text-purple-600'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step !== 'shipping' ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
                      }`}>
                        1
                      </div>
                      <span className="ml-2 font-medium">Shipping</span>
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300 mx-4" />
                    <div className={`flex items-center ${step !== 'shipping' ? 'text-purple-600' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step !== 'shipping' ? 'bg-purple-600 text-white' : 'bg-gray-300 text-white'
                      }`}>
                        2
                      </div>
                      <span className="ml-2 font-medium">Payment</span>
                    </div>
                  </div>

                  {/* Shipping Form */}
                  {step === 'shipping' && (
                    <form onSubmit={handleShippingSubmit} className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg font-semibold">Shipping Address</h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={shippingAddress.fullName}
                          onChange={(e) =>
                            setShippingAddress({ ...shippingAddress, fullName: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <input
                          type="text"
                          value={shippingAddress.address}
                          onChange={(e) =>
                            setShippingAddress({ ...shippingAddress, address: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            value={shippingAddress.city}
                            onChange={(e) =>
                              setShippingAddress({ ...shippingAddress, city: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State
                          </label>
                          <input
                            type="text"
                            value={shippingAddress.state}
                            onChange={(e) =>
                              setShippingAddress({ ...shippingAddress, state: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            value={shippingAddress.zipCode}
                            onChange={(e) =>
                              setShippingAddress({ ...shippingAddress, zipCode: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Country
                          </label>
                          <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) =>
                              setShippingAddress({ ...shippingAddress, country: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={shippingAddress.phone}
                          onChange={(e) =>
                            setShippingAddress({ ...shippingAddress, phone: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
                      >
                        Continue to Payment
                      </button>
                    </form>
                  )}

                  {/* Payment Form */}
                  {step === 'payment' && (
                    <form onSubmit={handlePaymentSubmit} className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <CreditCard className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg font-semibold">Payment Information</h3>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => setStep('shipping')}
                          className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700"
                        >
                          Place Order
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                {/* Order Summary */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                    <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-4">
                      {cart.map((item) => (
                        <div key={item.product.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            {item.product.name} × {item.quantity}
                          </span>
                          <span className="font-medium">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">${total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Shipping</span>
                        <span className="font-medium">${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tax</span>
                        <span className="font-medium">${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span className="text-purple-600">${grandTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
