import Image from 'next/image';

export default function SplashScreen() {
  return (
    <section className="h-[100vh] bg-castor-brown flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-6">
          <Image
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7e4aebcb79-4f877272e1a0d47d4663.png"
            alt="Castor Guide logo"
            width={160}
            height={160}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl text-clean-white font-montserrat font-extrabold uppercase tracking-wider mb-2">
          CASTOR GUIDE
        </h1>
        <p className="text-clean-white font-opensans">
          Empowering Ethical Canadian Consumption
        </p>
        <div className="mt-16">
          <div className="w-12 h-12 border-t-4 border-r-4 border-maple-red rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </section>
  );
}