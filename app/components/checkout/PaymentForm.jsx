"use client";
import { useState } from "react";
import { FaCreditCard, FaLock, FaShieldAlt } from "react-icons/fa";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  // Format expiry date
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? "/" + v.slice(2, 4) : "");
    }
    return v;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setLoading(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;

    if (name === "cardNumber") {
      value = formatCardNumber(value);
    } else if (name === "expiry") {
      value = formatExpiry(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-dark-deeper py-10 px-4 sm:px-6 lg:px-8">
      <div className="min-h-screen flex justify-center items-center">
        {/* Payment Summary */}
        <div className="border border-gray-700 rounded-lg shadow-lg mb-6 p-6 max-w-md w-full mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Payment Summary
          </h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
            <span className="text-gray-800 dark:text-white">$99.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Tax</span>
            <span className="text-gray-800 dark:text-white">$9.90</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between">
              <span className="font-semibold text-gray-800 dark:text-white">
                Total
              </span>
              <span className="font-semibold text-gray-800 dark:text-white">
                $108.90
              </span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-gray-700 rounded-lg shadow-lg p-6 max-w-md w-full mx-auto"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Payment Details
            </h2>
            <div className="flex space-x-2">
              <FaCreditCard className="text-gray-400 text-xl" />
              <FaLock className="text-gray-400 text-xl" />
            </div>
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              maxLength="19"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* Expiry and CVV */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength="3"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Cardholder Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* Billing Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Billing Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="123 Main St"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* City and Zip Code */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="New York"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="10001"
                className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              "Pay $108.90"
            )}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-100 rounded-md flex items-center">
              <FaShieldAlt className="mr-2" />
              Payment processed successfully!
            </div>
          )}

          {/* Security Badge */}
          <div className="mt-6 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <FaLock className="mr-2" />
            <span className="text-sm">
              Secure 256-bit SSL encrypted payment
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
