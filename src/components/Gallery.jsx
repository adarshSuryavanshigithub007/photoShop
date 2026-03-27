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

const Gallery = () => {
  const headerRef = useIntersectionObserver();
  const g1Ref = useIntersectionObserver();
  const g2Ref = useIntersectionObserver();
  const g3Ref = useIntersectionObserver();
  const g4Ref = useIntersectionObserver();
  const g5Ref = useIntersectionObserver();
  const g6Ref = useIntersectionObserver();
  const footerRef = useIntersectionObserver();

  return (
    <section id="gallery" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-in">
          <div className="max-w-2xl">
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">See The Quality Of Our Work</h3>
            <p className="text-gray-400 text-lg">A selection of our favorite shots spanning weddings, portraits, and studio work.</p>
          </div>
          {/* Categories filter placeholder */}
          <div className="mt-6 md:mt-0 flex gap-2 overflow-x-auto pb-2">
            <button className="px-5 py-2 bg-gold-500 text-dark-900 font-medium rounded-full text-sm whitespace-nowrap">All Work</button>
            <button className="px-5 py-2 glassmorphism text-white font-medium rounded-full text-sm hover:bg-white/10 transition whitespace-nowrap">Weddings</button>
            <button className="px-5 py-2 glassmorphism text-white font-medium rounded-full text-sm hover:bg-white/10 transition whitespace-nowrap">Portraits</button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Item 1 */}
          <div ref={g1Ref} className="gallery-item h-80 fade-in">
            <img src="/img/wedding.png" alt="Wedding work" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Wedding</span>
                <h4 className="text-white text-xl font-serif">Sunset Ceremony</h4>
              </div>
            </div>
          </div>
          {/* Gallery Item 2 */}
          <div ref={g2Ref} className="gallery-item h-80 fade-in" style={{ transitionDelay: '100ms' }}>
            <img src="/img/portrait.png" alt="Portrait work" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Studio Portrait</span>
                <h4 className="text-white text-xl font-serif">High Fashion Look</h4>
              </div>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div ref={g3Ref} className="gallery-item h-80 fade-in" style={{ transitionDelay: '200ms' }}>
            <img src="/img/hero.png" alt="Behind the scenes" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Behind The Scenes</span>
                <h4 className="text-white text-xl font-serif">Studio Setup</h4>
              </div>
            </div>
          </div>
          {/* Gallery Item 4 */}
          <div ref={g4Ref} className="gallery-item h-80 fade-in">
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Couple photography" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Pre-Wedding</span>
                <h4 className="text-white text-xl font-serif">Urban Romance</h4>
              </div>
            </div>
          </div>
          {/* Gallery Item 5 */}
          <div ref={g5Ref} className="gallery-item h-80 fade-in" style={{ transitionDelay: '100ms' }}>
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wedding detail" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Wedding</span>
                <h4 className="text-white text-xl font-serif">The Details</h4>
              </div>
            </div>
          </div>
          {/* Gallery Item 6 */}
          <div ref={g6Ref} className="gallery-item h-80 fade-in" style={{ transitionDelay: '200ms' }}>
            <img src="https://images.unsplash.com/photo-1554046920-90dcac2a6a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Baby photoshoot" className="w-full h-full object-cover" />
            <div className="gallery-overlay">
              <div>
                <span className="text-gold-500 text-xs font-bold tracking-wider uppercase mb-1 block">Baby Shoot</span>
                <h4 className="text-white text-xl font-serif">Pure Joy</h4>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={footerRef} className="text-center mt-12 fade-in">
          <a href="#gallery" className="inline-flex items-center text-white border-b-2 border-gold-500 pb-1 hover:text-gold-400 font-medium transition">
            View Full Gallery <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
