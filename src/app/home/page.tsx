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
      
      <section id="recent-scans" className="px-4 py-3">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-montserrat font-bold text-castor-brown">RECENT SCANS</h2>
          <a href="#" className="text-shield-blue text-sm font-semibold">View All</a>
        </div>
        
        <div id="scan-cards" className="space-y-4">
          <div id="scan-card-1" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4b14681f83-9a08f5c700f32741c3fa.png" alt="packaged cereal box product photo, canadian breakfast food, clean modern packaging" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-montserrat font-bold text-castor-brown">Morning Harvest Cereal</h3>
                <p className="text-sm text-gray-600">Scanned on May 27, 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-forest-green/10 text-forest-green text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-leaf mr-1"></i> Local Product
              </div>
              <div className="bg-shield-blue/10 text-shield-blue text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-check-circle mr-1"></i> Ethical
              </div>
            </div>
          </div>
          
          <div id="scan-card-2" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/64fddb8af5-08c008a156fb99dd5c71.png" alt="bottle of maple syrup, premium canadian product, glass container" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-montserrat font-bold text-castor-brown">Pure Maple Syrup</h3>
                <p className="text-sm text-gray-600">Scanned on May 25, 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-forest-green/10 text-forest-green text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-leaf mr-1"></i> Local Product
              </div>
              <div className="bg-shield-blue/10 text-shield-blue text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-check-circle mr-1"></i> Ethical
              </div>
            </div>
          </div>
          
          <div id="scan-card-3" className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a1e4a35c0f-575e4ec5bcdd50ad30f0.png" alt="coffee bag package, canadian coffee brand, modern minimalist design" />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="font-montserrat font-bold text-castor-brown">Mountain Blend Coffee</h3>
                <p className="text-sm text-gray-600">Scanned on May 22, 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-globe mr-1"></i> Imported
              </div>
              <div className="bg-maple-red/10 text-maple-red text-xs font-semibold px-2 py-1 rounded-full">
                <i className="fa-solid fa-info-circle mr-1"></i> Alternatives Available
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="shopping-tips" className="px-4 py-3 mt-2">
        <h2 className="text-lg font-montserrat font-bold text-castor-brown mb-4">ETHICAL SHOPPING TIPS</h2>
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-shield-blue/10 flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-lightbulb text-shield-blue text-xl"></i>
            </div>
            <div className="ml-4">
              <h3 className="font-montserrat font-bold text-castor-brown text-base">Look for local alternatives</h3>
              <p className="text-sm text-gray-600">Products made in Canada typically have a smaller carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>
      
      <nav id="footer" className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
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