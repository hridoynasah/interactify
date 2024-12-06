import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose, type }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
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
                  onClick={onClose}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              <form className="space-y-4">
                {type === "signup" && (
                  <div className="flex gap-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
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
                    type="email"
                    className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                  />
                </div>
                {type === "signup" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                    />
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  {type === "signin" ? (
                    <>
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        Don&apos;t have an account?
                      </a>
                      <a
                        href="#"
                        className="text-primary hover:text-primary-dark"
                      >
                        Forgot Password?
                      </a>
                    </>
                  ) : (
                    <a
                      href="#"
                      className="text-primary hover:text-primary-dark"
                    >
                      Already have an account?
                    </a>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md transition-colors"
                >
                  {type === "signin" ? "Sign In" : "Sign Up"}
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
