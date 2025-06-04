import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CarouselSlide {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  additionalContent?: React.ReactNode;
}

const slides: CarouselSlide[] = [
  {
    title: "OUR MISSION",
    description: "Helping Canadians make informed choices that support local businesses and ethical practices.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fc361e7479-eaed9b14b07ea7c1e079.png",
    imageAlt: "Canadian consumer scanning product barcode with phone, maple leaf icon, ethical shopping concept, illustration style",
    additionalContent: <p className="heritage-text text-2xl text-forest-green">For our community</p>
  },
  {
    title: "HOW IT WORKS",
    description: "",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d194e1bae4-ae648dbca219cf00c532.png",
    imageAlt: "phone scanning product barcode, data visualization showing Canadian origin and ethical rating, modern illustration style",
    additionalContent: (
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="bg-shield-blue text-clean-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</div>
          <p className="text-left">Scan product barcodes while shopping</p>
        </div>
        <div className="flex items-start">
          <div className="bg-shield-blue text-clean-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</div>
          <p className="text-left">Get instant information on origin, sustainability, and ethical practices</p>
        </div>
        <div className="flex items-start">
          <div className="bg-shield-blue text-clean-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</div>
          <p className="text-left">Compare alternatives and make informed decisions</p>
        </div>
      </div>
    )
  },
  {
    title: "YOUR PRIVACY",
    description: "We respect your data and privacy. Your shopping habits are never sold or shared with third parties.",
    image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9e0c23689e-203df4e3ca357758d6bf.png",
    imageAlt: "privacy shield with Canadian maple leaf, data protection concept, lock icon, secure data illustration",
    additionalContent: (
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-700">We only collect anonymous usage data to improve our product database and recommendations.</p>
      </div>
    )
  }
];

export default function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      // Navigate to auth screen
      console.log('Navigate to auth screen');
      return;
    }
    setCurrentSlide((prev) => prev + 1);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const skipOnboarding = () => {
    // Navigate to auth screen
    console.log('Navigate to auth screen');
  };

  return (
    <section className="h-[100vh] bg-clean-white">
      <div className="h-full relative">
        <div className="h-full flex flex-col px-6 py-10">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].imageAlt}
              width={256}
              height={256}
              className="mb-8"
            />
            <h2 className="text-3xl font-montserrat font-extrabold uppercase text-castor-brown mb-4">
              {slides[currentSlide].title}
            </h2>
            {slides[currentSlide].description && (
              <p className="text-lg mb-6">{slides[currentSlide].description}</p>
            )}
            {slides[currentSlide].additionalContent}
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              variant="ghost"
              className="text-castor-brown"
              onClick={skipOnboarding}
            >
              Skip
            </Button>
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    currentSlide === index ? 'bg-maple-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              className="text-castor-brown"
              onClick={nextSlide}
            >
              {currentSlide === slides.length - 1 ? 'Start' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}