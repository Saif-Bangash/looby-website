/* eslint-disable react/prop-types */
import { useEffect } from "react";
import gsap from "gsap";
import { cards } from "../../Export";

// eslint-disable-next-line no-unused-vars
const Servicesection = ({ icone, title, text }) => {
  useEffect(() => {
    // GSAP animation for each card
    gsap.fromTo(
      ".service-card",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotation: 10,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((data, index) => (
            <div
              key={index}
              className="service-card text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
            >
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl text-blue-500">{data.icon}</span>
              </div>
              <h2 className="text-2xl font-semibold  text-gray-800 mb-4">
                {data.title}
              </h2>
              <p className="text-gray-600">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicesection;
