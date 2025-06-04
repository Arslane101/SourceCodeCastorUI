import Link from 'next/link'

export default function ScanPage() {
  return (
    <main id="scan-input-choice" className="px-6 py-8">
      <header className="bg-castor-brown text-clean-white py-4 px-6 fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/home" className="mr-3">
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </Link>
            <h1 className="text-xl font-montserrat font-extrabold uppercase">SCAN PRODUCT</h1>
          </div>
          <button>
            <i className="fa-solid fa-question-circle text-xl"></i>
          </button>
        </div>
      </header>

      <div className="mt-20">
        <section id="scan-info" className="mb-8 text-center">
          <h2 className="text-2xl font-montserrat font-extrabold uppercase text-castor-brown mb-4">CHOOSE INPUT METHOD</h2>
          <p className="text-gray-700">Add one or multiple images to analyze the product</p>
        </section>

        <section id="input-options" className="space-y-6">
          <Link href="/scan/camera" className="block">
            <div className="bg-clean-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-montserrat font-bold text-castor-brown">TAKE PHOTO</h3>
                  <div className="w-12 h-12 bg-maple-red rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-camera text-clean-white text-xl"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">Use your camera to take photos of the product label, barcode, or packaging</p>
              </div>
            </div>
          </Link>

          <Link href="/scan/upload" className="block">
            <div className="bg-clean-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-montserrat font-bold text-castor-brown">UPLOAD IMAGES</h3>
                  <div className="w-12 h-12 bg-shield-blue rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-upload text-clean-white text-xl"></i>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">Select existing photos from your gallery to analyze</p>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  )
}