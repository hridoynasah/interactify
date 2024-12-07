import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-gradient-to-br from-dark to-dark-deeper py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <form className="bg-dark-deeper p-8 rounded-lg shadow-xl border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              placeholder="How can we help?"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-dark border border-gray-700 rounded-md text-white focus:outline-none focus:border-primary"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-md transition-colors font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}