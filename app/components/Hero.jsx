import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Sparkles className="w-16 h-16 text-blue-500" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-blue-500">Interactify</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Connect, share, and engage with a global community. Experience
            social networking reimagined for the modern age.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition duration-200">
              Get Started
            </button>
            <button className="px-8 py-3 bg-black/30 hover:bg-black/40 text-white rounded-lg text-lg font-medium border border-blue-500 backdrop-blur-sm transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
