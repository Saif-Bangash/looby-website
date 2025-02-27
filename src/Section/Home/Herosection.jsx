import { useEffect } from 'react';
import gsap from 'gsap';   // This is the fixed image

// eslint-disable-next-line react/prop-types
const Herosection = ({ reverse, image, heading, text, showInput }) => {
  useEffect(() => {
    // GSAP animations
    gsap.fromTo(
      '.hero-img', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-heading', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-text', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-input, .hero-button', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, delay: 0.6, ease: 'power3.out' }
    );
  }, []);

  return (
    <main>
      <div className="container mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center justify-center px-6 py-12">
        {/* Hero Image */}
        <div className={`lg:flex lg:justify-center lg:items-center ${reverse ? 'lg:order-2' : ''}`}>
          <img
            src={image}   
            alt="Hero Image"
            className="hero-img w-full h-auto object-cover lg:w-96 xl:w-[500px] rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className={`lg:text-left lg:pl-10 mt-8 lg:mt-0 ${reverse ? 'lg:order-1' : ''}`}>
          <h3 className="hero-heading text-4xl font-bold text-gray-800 mb-4">
            {heading}
          </h3>
          <p className="hero-text text-xl text-gray-600 mb-6 font-mono">
           {text}
          </p>
          {showInput && (
            <div className="flex justify-center lg:justify-start gap-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="hero-input p-3 rounded-md w-full sm:w-72 lg:w-80 text-black border-1 border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="hero-button bg-blue-400 text-white px-6 text-sm rounded-md hover:bg-blue-700 transition duration-300">
                Notify
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Herosection;
