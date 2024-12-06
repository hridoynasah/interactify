import { Users, MessageSquare, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Global Community",
    description: "Connect with like-minded individuals from around the world.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Instant messaging with friends and groups.",
  },
  {
    icon: Globe,
    title: "Content Sharing",
    description: "Share your stories, photos, and experiences effortlessly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your security and privacy are our top priorities.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Interactify?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience a new way of connecting with people and sharing your
            stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-gray-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition duration-300"
            >
              <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
