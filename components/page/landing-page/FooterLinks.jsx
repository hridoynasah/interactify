import React from "react";

export function FooterLinks({ sections }) {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="text-white text-sm font-semibold">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
