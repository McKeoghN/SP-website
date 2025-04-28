function HeroSection() {
  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden bg-gradient-to-r from-amber-800 to-amber-600">
      <div className="absolute inset-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,245.3C672,235,768,213,864,197.3C960,181,1056,171,1152,170.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;