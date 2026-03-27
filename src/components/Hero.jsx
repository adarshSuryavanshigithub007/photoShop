import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Simple fade in effect without IntersectionObserver since it's the top element
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current.classList.add("visible");
      }, 100);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900"></div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in"
      >
        <p className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Professional Photography
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          Capturing Moments
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            Creating Memories
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto font-light mb-10">
          We craft stunning visual stories for your most important life events.
          Experience premium photography tailored for your business or personal
          milestones.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-gold-500 text-dark-900 px-8 py-4 rounded-full font-bold btn-hover text-lg shadow-lg shadow-gold-500/30 flex items-center justify-center gap-2"
          >
            Book Photoshoot <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            href="#gallery"
            className="glassmorphism text-white px-8 py-4 rounded-full font-semibold btn-hover text-lg border border-gray-600 hover:border-gray-400 flex items-center justify-center"
          >
            View Our Work
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto border-t border-white/10 pt-10">
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">10+</h3>
            <p className="text-sm text-gray-400">Years Exp.</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">5k+</h3>
            <p className="text-sm text-gray-400">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">Top</h3>
            <p className="text-sm text-gray-400">Quality Gear</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white mb-1">24h</h3>
            <p className="text-sm text-gray-400">Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
