import React from "react";
import { Logo } from "./Logo";
import { FooterLinks } from "./FooterLinks";
import { SocialLinks } from "./SocialLinks";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#" },
      { label: "Features", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Community Guidelines", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-sm">
              Connecting people, sharing moments, and building communities
              worldwide.
            </p>
            <SocialLinks />
          </div>

          {/* Links Section */}
          <div className="md:col-span-8">
            <FooterLinks sections={footerSections} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Interactify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
