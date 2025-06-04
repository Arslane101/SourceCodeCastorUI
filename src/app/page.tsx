import Link from 'next/link'

export default function Home() {
  return (
    <section id="splash-screen" className="h-[100vh] bg-castor-brown flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6">
          <img className="w-40 h-40 mx-auto" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e4aebcb79-4f877272e1a0d47d4663.png" alt="Castor Guide logo" />
        </div>
        <h1 className="text-4xl text-clean-white font-montserrat font-extrabold uppercase tracking-wider mb-2">CASTOR GUIDE</h1>
        <p className="text-clean-white font-opensans">Empowering Ethical Canadian Consumption</p>
        <div className="mt-16">
          <Link href="/home" className="bg-maple-red text-white px-8 py-3 rounded-md font-semibold">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}