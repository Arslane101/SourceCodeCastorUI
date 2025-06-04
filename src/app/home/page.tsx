import Link from 'next/link'

export default function HomePage() {
  return (
    <main id="home-screen" className="min-h-[100vh] bg-gray-50 pb-20">
      <header id="header" className="bg-castor-brown px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-10 h-10" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e4aebcb79-4f877272e1a0d47d4663.png" alt="Castor Guide logo" />
            <h1 className="text-xl font-montserrat font-extrabold uppercase tracking-wider text-clean-white ml-2">CASTOR GUIDE</h1>
          </div>
          <button className="text-clean-white">
            <i className="fa-regular fa-bell text-xl"></i>
          </button>
        </div>
      </header>
      
      <section id="search-section" className="px-4 py-4 bg-white shadow-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fa-solid fa-search text-gray-400"></i>
          </div>
          <input type="text" className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 text-sm" placeholder="Search products or brands..." />
        </div>
      </section>
      
      <section id="scan-cta" className="px-4 py-6">
        <Link href="/scan" className="bg-gradient-to-r from-castor-brown to-castor-brown/90 rounded-xl p-5 text-clean-white flex items-center justify-between shadow-md">
          <div className="flex-1">
            <h2 className="text-xl font-montserrat font-extrabold uppercase mb-1">SCAN PRODUCT</h2>
            <p className="text-sm opacity-90">Discover ethical & local alternatives</p>
          </div>
          <div className="bg-maple-red rounded-full p-3 ml-4">
            <i className="fa-solid fa-barcode text-2xl"></i>
          </div>
        </Link>
      </section>

      <nav id="footer" className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          <Link href="/home" className="flex flex-col items-center justify-center w-full h-full text-maple-red">
            <i className="fa-solid fa-home text-xl"></i>
            <span className="text-xs mt-1 font-semibold">Home</span>
          </Link>
          
          <Link href="/scan" className="flex flex-col items-center justify-center w-full h-full relative">
            <div className="absolute -top-5 w-14 h-14 rounded-full bg-castor-brown flex items-center justify-center shadow-lg">
              <i className="fa-solid fa-barcode text-clean-white text-xl"></i>
            </div>
            <span className="text-xs mt-8 font-semibold text-gray-600">Scan</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center justify-center w-full h-full text-gray-600">
            <i className="fa-solid fa-user text-xl"></i>
            <span className="text-xs mt-1 font-semibold">Profile</span>
          </Link>
        </div>
      </nav>
    </main>
  )
}