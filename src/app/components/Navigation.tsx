import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              EssAI
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="text-gray-800 hover:text-green-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-green-500 transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-gray-800 hover:text-green-500 transition-colors">
                Pricing
              </Link>
              <Link href="/apikeys" className="text-gray-800 hover:text-green-500 transition-colors">
                API Keys
              </Link>
              <Link 
                href="/signup" 
                className="gradient-bg text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-green-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 