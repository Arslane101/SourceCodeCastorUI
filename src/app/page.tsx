import { useState } from 'react';

interface TextInputProps {
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const TextInput = ({ id, type = "text", placeholder, required = false, className }: TextInputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`px-3 py-2 bg-white border shadow-sm placeholder-gray-400 focus:outline-none focus:border-shield-blue focus:ring-1 focus:ring-shield-blue ${className}`}
    />
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <section className="min-h-[100vh] bg-clean-white px-6 py-10">
      <div className="flex flex-col h-full">
        <div className="mb-10 text-center">
          <img 
            className="w-24 h-24 mx-auto" 
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e4aebcb79-4f877272e1a0d47d4663.png" 
            alt="Castor Guide logo" 
          />
          <h1 className="text-3xl font-montserrat font-extrabold uppercase text-castor-brown mt-4">CASTOR GUIDE</h1>
        </div>
        
        <div className="flex-1">
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 font-semibold ${activeTab === 'login' ? 'text-castor-brown border-b-2 border-maple-red' : 'text-gray-500'}`}
            >
              Log In
            </button>
            <button 
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-3 font-semibold ${activeTab === 'signup' ? 'text-castor-brown border-b-2 border-maple-red' : 'text-gray-500'}`}
            >
              Sign Up
            </button>
          </div>
          
          {activeTab === 'login' && (
            <div>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <TextInput 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="w-full border-gray-300 rounded-md" 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                  <TextInput 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="w-full border-gray-300 rounded-md" 
                  />
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-shield-blue hover:underline">Forgot password?</a>
                </div>
              </div>
              
              <button className="w-full bg-castor-brown hover:bg-castor-brown/90 text-white py-3 rounded-md font-semibold">
                Log In
              </button>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="w-full py-2.5 border border-gray-300 rounded-md font-medium">
                    <i className="fa-brands fa-google mr-2"></i> Google
                  </button>
                  <button className="w-full py-2.5 border border-gray-300 rounded-md font-medium">
                    <i className="fa-brands fa-apple mr-2"></i> Apple
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'signup' && (
            <div className="space-y-4">
              <div>
                <label htmlFor="signup-email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <TextInput 
                  id="signup-email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="w-full border-gray-300 rounded-md" 
                />
              </div>
              <div>
                <label htmlFor="signup-password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                <TextInput 
                  id="signup-password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="w-full border-gray-300 rounded-md" 
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                <TextInput 
                  id="confirm-password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  className="w-full border-gray-300 rounded-md" 
                />
              </div>
              <button className="w-full bg-castor-brown hover:bg-castor-brown/90 text-white py-3 rounded-md font-semibold mt-6">
                Sign Up
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full py-3 text-castor-brown font-semibold">Continue as Guest</button>
          <p className="mt-4 text-xs text-center text-gray-500">
            By continuing, you agree to our <a href="#" className="text-shield-blue">Terms of Service</a> and{' '}
            <a href="#" className="text-shield-blue">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}