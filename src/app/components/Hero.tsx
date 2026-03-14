import bannerImage from "figma:asset/f30591fcbd8b34bd3aafcb6c96e5eb19414afaf4.png";

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="RK World Tower Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl mb-6">Welcome to RK World Tower</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          A Premier Residential Community in the Heart of Rajkot
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-3 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}