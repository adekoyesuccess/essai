import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Write Better Essays</span>
            <br />
            with AI Assistance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your writing process with our advanced AI essay assistant. Get instant feedback, suggestions, and help with research and structure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup"
              className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started Free
            </Link>
            <Link
              href="/about"
              className="glass-card px-8 py-4 rounded-full text-lg font-semibold text-gray-800 hover:bg-white/30 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Features that Set Us Apart</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Writing",
                description: "Advanced AI algorithms help you write better, more engaging essays with intelligent suggestions.",
                icon: "✍️"
              },
              {
                title: "Real-time Feedback",
                description: "Get instant feedback on grammar, style, and structure as you write.",
                icon: "⚡"
              },
              {
                title: "Research Assistant",
                description: "Access relevant sources and citations with our intelligent research assistant.",
                icon: "🔍"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-6 hover:bg-white/30 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students and professionals who are already writing better essays with EssAI.
          </p>
          <Link
            href="/signup"
            className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Start Writing Better Essays
          </Link>
        </div>
      </section>
      </main>
  );
}
