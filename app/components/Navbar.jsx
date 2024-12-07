"use client";
import { useState } from "react";
import Logo from "./Logo";
import AuthModal from "./AuthModal";
import Link from "next/link";

export default function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-dark-deeper/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSignInOpen(true)}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsSignUpOpen(true)}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-md transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        type="signin"
      />

      <AuthModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        type="signup"
      />
    </>
  );
}
