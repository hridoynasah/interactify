import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-deeper text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo />
            <p className="mt-4">
              Connecting learners, sharing knowledge, and building educational
              communities worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <FaFacebook className="text-xl hover:text-primary cursor-pointer" />
              <FaTwitter className="text-xl hover:text-primary cursor-pointer" />
              <FaInstagram className="text-xl hover:text-primary cursor-pointer" />
              <FaLinkedin className="text-xl hover:text-primary cursor-pointer" />
              <FaGithub className="text-xl hover:text-primary cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2024 The Originals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
