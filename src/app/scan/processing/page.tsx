'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProcessingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/scan/results');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-white flex flex-col px-6 py-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <img 
            className="w-10 h-10" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e4aebcb79-4f877272e1a0d47d4663.png" 
            alt="Castor Guide logo" 
          />
          <h1 className="text-xl font-montserrat font-extrabold uppercase text-castor-brown ml-2">
            CASTOR GUIDE
          </h1>
        </div>
      </header>
      
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-48 h-48 mb-8">
          <img 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/80d885bfb2-56d946954894131d1262.png"
            alt="Processing animation"
            className="w-full h-full object-contain animate-bounce"
          />
        </div>
        <h2 className="text-2xl font-montserrat font-extrabold text-castor-brown mb-2">
          ANALYZING PRODUCT...
        </h2>
        <p className="text-gray-600">
          We're checking origin, sustainability, and ethical practices
        </p>
      </div>
    </main>
  );
}