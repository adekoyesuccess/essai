import Link from 'next/link';

interface PricingTierProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const PricingTier = ({ name, price, features, isPopular = false }: PricingTierProps) => (
  <div className={`glass-card p-8 relative ${isPopular ? 'border-2 border-green-400' : ''}`}>
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-1 rounded-full text-sm">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-600">/month</span>
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <Link
      href="/signup"
      className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${
        isPopular
          ? 'gradient-bg text-white hover:opacity-90'
          : 'bg-white/50 hover:bg-white/70 text-gray-800'
      }`}
    >
      Get Started
    </Link>
  </div>
);

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Free",
      price: 0,
      features: [
        "Up to 3 essays per month",
        "Basic grammar checking",
        "Limited AI suggestions",
        "Community support"
      ]
    },
    {
      name: "Pro",
      price: 19,
      isPopular: true,
      features: [
        "Unlimited essays",
        "Advanced grammar & style checking",
        "Full AI writing assistance",
        "Research helper",
        "Priority support",
        "Plagiarism checker"
      ]
    },
    {
      name: "Enterprise",
      price: 49,
      features: [
        "Everything in Pro",
        "Custom AI model training",
        "Team collaboration",
        "API access",
        "Dedicated support",
        "Custom integrations"
      ]
    }
  ];

  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our core AI features to help you write better essays.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for custom pricing and features tailored to your organization's needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white/50 hover:bg-white/70 text-gray-800 py-3 px-6 rounded-full font-semibold transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </main>
  );
} 