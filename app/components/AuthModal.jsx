"use client";
import { useAuth } from "@/context/AuthContext";
import { registerUser, userLogin } from "@/server-actions";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose, type }) {
  const { authData } = useAuth();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleClose = () => {
    setError("");
    setSuccessMessage("");
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setIsLoading(true);

    if (authData) {
      setError("User already authorized");
    }

    if (type === "signup") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      try {
        const response = await registerUser(formData);
        if (response.success) {
          setSuccessMessage("Registration successful! You can now log in.");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        } else {
          setError(response.error || "An error occurred during registration.");
        }
      } catch (err) {
        setError(err.message || "Failed to register user.");
      } finally {
        setIsLoading(false);
      }
    } else if (type === "signin") {
      try {
        const response = await userLogin({
          email: formData.email,
          password: formData.password,
        });

        if (response.success) {
          login(response.user);
          setSuccessMessage("Sign-in successful! Redirecting...");

          setTimeout(() => {
            router.push("/courses");
            handleClose();
            setIsLoading(false);
          }, 2000);
        } else {
          setError(response.error || "Invalid email or password.");
          setIsLoading(false);
        }
      } catch (err) {
        setError(err.message || "Failed to log in.");
        setIsLoading(false);
      }
    }
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-dark-deeper rounded-lg p-6 w-full max-w-md border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-semibold text-white">
                  {type === "signin" ? "Sign In" : "Sign Up"}
                </Dialog.Title>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleForm} className="space-y-4">
                {type === "signup" && (
                  <div className="flex gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                  />
                </div>
                {type === "signup" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Confirm Password
                    </label>
                    <input
                      required
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                )}
                {error && <p className="text-sm text-red-500">{error}</p>}
                {successMessage && (
                  <p className="text-sm text-green-500">{successMessage}</p>
                )}
                {isLoading ? (
                  <button
                    disabled
                    className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    disabled={authData || isLoading}
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors"
                  >
                    {type === "signin" ? "Sign In" : "Sign Up"}
                  </button>
                )}
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
