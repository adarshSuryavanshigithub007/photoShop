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

const About = () => {
  const imageRef = useIntersectionObserver();
  const textRef = useIntersectionObserver();

  return (
    <section id="about" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-purple-500/20 blur-xl rounded-full opacity-50"></div>
            <img src="/img/hero.png" alt="Behind the scenes at Neon Studio" className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full border border-white/5" />
          </div>
          
          {/* Text Side */}
          <div ref={textRef} className="fade-in">
            <h2 className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-3">About The Studio</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Your story, beautifully told through our lens.</h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Welcome to Neon Studio. We are a passionate team of professional photographers dedicated to transforming your precious moments into timeless art. With over 10 years of experience, we know exactly how to capture emotion, light, and personality.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Whether it&apos;s the magical day of your wedding, an intimate family portrait, or high-end commercial imagery for your business, we build trust through exceptional quality and a comfortable, fun shooting experience.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-300">
                <i className="fa-solid fa-check text-gold-500 mr-3 text-lg"></i> Experienced Lead Photographer
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fa-solid fa-check text-gold-500 mr-3 text-lg"></i> High-End Studio Environment
              </li>
              <li className="flex items-center text-gray-300">
                <i className="fa-solid fa-check text-gold-500 mr-3 text-lg"></i> Fast & Professional Delivery
              </li>
            </ul>

            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Signature_placeholder.svg" style={{ filter: 'invert(1)', opacity: 0.6, height: '50px' }} alt="Signature" className="mb-4" />
            <p className="text-white font-serif italic text-xl">Founder & Lead Photographer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
