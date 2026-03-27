import { useEffect, useRef } from 'react';

const useIntersectionObserver = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return ref;
};

const Services = () => {
  const headerRef = useIntersectionObserver();
  const card1Ref = useIntersectionObserver();
  const card2Ref = useIntersectionObserver();
  const card3Ref = useIntersectionObserver();
  const additionalRef = useIntersectionObserver();

  return (
    <section id="services" className="py-24 bg-dark-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3">What We Do</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Photography Services</h3>
          <p className="text-gray-400 text-lg">We offer a wide range of professional photography services to cover all your needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div ref={card1Ref} className="service-card glassmorphism rounded-2xl overflow-hidden group fade-in">
            <div className="h-64 overflow-hidden relative">
              <img src="/img/wedding.png" alt="Wedding Photography" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-6">
                <i className="fa-solid fa-ring text-3xl text-gold-400 mb-2"></i>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition">Wedding Photography</h4>
              <p className="text-gray-400 mb-6 line-clamp-3">Capture the magic of your special day. From pre-wedding shoots to the grand reception, we document every smile and tear.</p>
              <a href="#contact" className="text-gold-500 font-medium hover:text-white transition flex items-center">Book Now <i className="fa-solid fa-arrow-right ml-2 text-sm"></i></a>
            </div>
          </div>

          {/* Service 2 */}
          <div ref={card2Ref} className="service-card glassmorphism rounded-2xl overflow-hidden group fade-in" style={{ transitionDelay: '100ms' }}>
            <div className="h-64 overflow-hidden relative">
              <img src="/img/portrait.png" alt="Portrait Photography" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-6">
                <i className="fa-solid fa-user-astronaut text-3xl text-gold-400 mb-2"></i>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition">Studio Portraits</h4>
              <p className="text-gray-400 mb-6 line-clamp-3">Professional portraits tailored for models, corporate executives, or personal milestones. High-end retouching included.</p>
              <a href="#contact" className="text-gold-500 font-medium hover:text-white transition flex items-center">Book Now <i className="fa-solid fa-arrow-right ml-2 text-sm"></i></a>
            </div>
          </div>

          {/* Service 3 */}
          <div ref={card3Ref} className="service-card glassmorphism rounded-2xl overflow-hidden group fade-in" style={{ transitionDelay: '200ms' }}>
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1519671115229-b64817a8ce0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Event Photography" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-6">
                <i className="fa-solid fa-champagne-glasses text-3xl text-gold-400 mb-2"></i>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-gold-400 transition">Event Photography</h4>
              <p className="text-gray-400 mb-6 line-clamp-3">Comprehensive coverage for corporate events, parties, and family gatherings. We capture the atmosphere perfectly.</p>
              <a href="#contact" className="text-gold-500 font-medium hover:text-white transition flex items-center">Book Now <i className="fa-solid fa-arrow-right ml-2 text-sm"></i></a>
            </div>
          </div>

          {/* Additional services listing briefly */}
          <div ref={additionalRef} className="col-span-1 md:col-span-2 lg:col-span-3 mt-8 glassmorphism p-8 rounded-2xl border-white/5 flex flex-wrap gap-4 items-center justify-center fade-in text-gray-300">
            <span className="font-semibold text-white mr-2">Also offering:</span>
            <span className="px-4 py-2 bg-dark-900 rounded-full text-sm border border-gray-800">Baby Photoshoots <i className="fa-solid fa-baby ml-1 text-gold-500"></i></span>
            <span className="px-4 py-2 bg-dark-900 rounded-full text-sm border border-gray-800">Passport Size Photos <i className="fa-solid fa-id-badge ml-1 text-gold-500"></i></span>
            <span className="px-4 py-2 bg-dark-900 rounded-full text-sm border border-gray-800">Premium Photo Printing <i className="fa-solid fa-print ml-1 text-gold-500"></i></span>
            <span className="px-4 py-2 bg-dark-900 rounded-full text-sm border border-gray-800">Product Photography <i className="fa-solid fa-box ml-1 text-gold-500"></i></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
