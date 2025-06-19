'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          <span className="gradient-text">Welcome, {session?.user?.name || 'User'}</span>
        </h1>

        <div className="glass-card p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Dashboard</h2>
              <p className="text-gray-600">
                This is your protected dashboard. You can start building your dashboard content here.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card bg-white/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
                <p className="text-gray-600">Your activity statistics will appear here.</p>
              </div>

              <div className="glass-card bg-white/30 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                <p className="text-gray-600">Your recent actions will be displayed here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 