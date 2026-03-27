const Footer = () => {
  return (
    <footer className="bg-dark-900 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <a href="#" className="font-serif text-2xl font-bold tracking-wider text-white">
            Neon<span className="text-gold-500">Studio</span>.
          </a>
          <p className="text-gray-500 mt-2 text-sm">Capturing the moments that matter.</p>
        </div>
        
        <div className="flex space-x-6 text-gray-400">
          <a href="#" className="hover:text-gold-500 transition text-xl"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-gold-500 transition text-xl"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gold-500 transition text-xl"><i className="fa-brands fa-twitter"></i></a>
        </div>
        
        <p className="text-gray-500 text-sm">
          &copy; 2026 Neon Studio. All rights reserved. <br/> Design by You.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
