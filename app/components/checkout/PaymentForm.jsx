"use client";
import { useEffect, useState } from "react";
import { FaCreditCard, FaLock } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import LoadingUi from "../LoadingUi";
import { getCourseById, makePayment } from "@/server-actions";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const params = useParams();
  const courseId = params?.courseId;
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authData) {
      router.push("/courses");
      toast.warning("Please sign in for purchase");
      return;
    }

    const fetchCourseData = async () => {
      try {
        setLoading(true);
        const course = await getCourseById(courseId);
        setCourseData(course);
      } catch (err) {
        console.error("Failed to fetch course data:", err);
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (loading) return <LoadingUi />;
  if (error) return <div className="text-red-500">{error}</div>;

  return <PaymentDetails courseData={courseData} />;
};

const PaymentDetails = ({ courseData }) => {
  const router = useRouter();
  const { authData } = useAuth();

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

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length ? parts.join(" ") : value;
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? "/" + v.slice(2, 4) : "");
    }
    return v;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        ...formData,
        course: courseData._id,
        paidAmount: courseData?.price + 9.9,
      };

      const userId = authData._id;

      const result = await makePayment(data, userId);

      if (result.success) {
        toast.success("Enrollment successful");
        setTimeout(() => {
          router.push("/my-courses");
        }, 2000);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            <span className="text-gray-600 dark:text-gray-300">Course</span>
            <span className="text-gray-800 dark:text-white">
              {courseData?.title}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
            <span className="text-gray-800 dark:text-white">
              ${courseData?.price}
            </span>
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
                ${courseData?.price + 9.9}
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
                type="number"
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
              placeholder="1234 Main St"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* Zip Code */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              ZIP Code
            </label>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="12345"
              maxLength="10"
              className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 px-4 text-white font-semibold rounded-md ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-primary hover:bg-primary-dark focus:outline-none"
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
