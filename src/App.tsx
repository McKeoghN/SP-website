import { useState } from 'react';
import { Home, Hammer, PencilLine as Phone, Mail, MapPin, ChevronRight, Menu, X, PenLine} from 'lucide-react';
import logo from '/img/logo.png';
import flooring from '/img/Flooring.JPG';
import door from '/img/Door.jpg';
import sink from '/img/Sink.JPG';
import floor from '/img/Floor.jpg';
import stairs from '/img/Stairs.jpg';
import tiling from '/img/Tiling.JPG';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('carpentry');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const galleryImages = [
    { id: 1, src: flooring, alt: 'Patio Repairs' },
    { id: 2, src: tiling, alt: 'Bathroom Tiling' },
    { id: 3, src: door, alt: 'Door Installation' },
    { id: 4, src: floor, alt: 'Floor Installation' },
    { id: 5, src: stairs, alt: 'Stair Installation' },
    { id: 6, src: sink, alt: 'Bathroom Installation'},
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="bg-amber-800 text-white shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
            >
              <span className="text-xl font-bold">SP Carpentry and Home Maintenance</span>
            </button>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-amber-200 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-amber-200 transition-colors"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="hover:text-amber-200 transition-colors"
              >
                Our work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-amber-200 transition-colors"
              >
                Contact
              </button>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-amber-800 shadow-lg z-50">
            <div className="px-4 py-2 space-y-2">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 px-4 rounded hover:bg-amber-700"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 px-4 rounded hover:bg-amber-700"
              >
                About us
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 px-4 rounded hover:bg-amber-700"
              >
                Our work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-2 px-4 rounded hover:bg-amber-700"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 opacity-90"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white space-y-8">
              {/* Logo centered */}
              <div className="flex justify-center mb-8">
                <div className="rounded-2xl">
                  <img 
                    src={logo}
                    alt="SP Carpentry & Home Maintenance Logo" 
                    className="h-72 w-auto mx-auto"
                  />
                </div>
              </div>
              
              {/* Tagline */}
              <p className="text-2xl md:text-3xl mb-4 font-light">35+ years of Quality Craftsmanship</p>
              {/* <p className="text-xl md:text-2xl mb-8 text-100">35+ Years of Expert Carpentry & Home Repair Services in Chelmsford</p> */}
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Your Free Quote
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition-all duration-300"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center -mt-10 mb-12 text-gray-800">Our Services</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <button
                  onClick={() => setActiveServiceTab('maintenance')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeServiceTab === 'maintenance'
                      ? 'bg-amber-800 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  <Home className="w-5 h-5 inline mr-2" />
                  Home Maintenance
                </button>
                <button
                  onClick={() => setActiveServiceTab('carpentry')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeServiceTab === 'carpentry'
                      ? 'bg-amber-800 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  <PenLine className="w-5 h-5 inline mr-2" />  
                  Carpentry
                </button>
                <button
                  onClick={() => setActiveServiceTab('handyman')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeServiceTab === 'handyman'
                      ? 'bg-amber-800 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  <Hammer className="w-5 h-5 inline mr-2" />
                  Handyman
                </button>
              </div>

              {/* Service Content */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                {activeServiceTab === 'carpentry' && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Built-in Cabinets & Shelving</h4>
                      <p className="text-gray-600">Custom built-in solutions to maximise your space with style.</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Decorative Carpentry</h4>
                      <p className="text-gray-600">Coving, Architraves and Skirting Boards</p>
                    </div>
                  </div>
                )}

                {activeServiceTab === 'maintenance' && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Kitchen Renovations</h4>
                      <p className="text-gray-600">Refresh kitchens with new doors and wooden worktops</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Door Hanging</h4>
                      <p className="text-gray-600">Professional door hanging services including door furniture</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Flooring Fitting and Repairs</h4>
                      <p className="text-gray-600">Installation and repairs of hardwood and laminate flooring.</p>
                    </div>
                  </div>
                )}

                {activeServiceTab === 'handyman' && (
                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">General Repairs</h4>
                      <p className="text-gray-600">Quick fixes and maintenance for your home.</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Furniture Assembly</h4>
                      <p className="text-gray-600">Professional assembly of flat-pack and ready-to-assemble furniture.</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Hanging & Mounting</h4>
                      <p className="text-gray-600">Secure installation of TVs, artwork, shelves, and other wall-mounted items.</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Wooden Garden Constructions</h4>
                      <p className="text-gray-600">Professional installation and repairs of sheds and gazebos</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Plumbing Jobs</h4>
                      <p className="text-gray-600">Small jobs such as dropping radiators, toilet and shower installation and repair. *cannot do gas work*</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Gutter Repairs</h4>
                      <p className="text-gray-600">Quick and efficient gutter repairs</p>
                    </div>
                    <div className="border-l-4 border-amber-800 pl-6 py-4 hover:bg-amber-50 transition-colors rounded">
                      <h4 className="font-semibold text-xl mb-2">Tiling</h4>
                      <p className="text-gray-600">Bespoke tiling</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t text-center">
                  <p className="text-gray-600 mb-4">Free quotes available • No job too small</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-amber-800 text-white py-3 px-8 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                  >
                    Get Your Free Quote <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center -mt-10 mb-6 text-gray-800">About Us</h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Image placeholder */}
                <div className="relative">
                  <div className="aspect-square rounded-2xl shadow-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* <div className="text-center">
                        <ImageIcon className="w-24 h-24 text-amber-600 mx-auto mb-4" />
                        <p className="text-amber-700 font-medium">Photo of little Stevie</p>
                      </div> */}
                      <div className="aspect-square rounded-2xl shadow-xl overflow-hidden">
                        <img 
                          src="/img/Steve.JPG" 
                          alt="SP Carpentry Logo" 
                          className="w-full h-full object-contain p-8"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-800 rounded-2xl -z-10"></div>
                </div>

                {/* Right side - Content */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-800">
                    <h3 className="text-xl font-semibold mb-3 text-amber-900">Expert Craftsmanship</h3>
                    <p className="text-gray-700 leading-relaxed">
                      At SP Carpentry & Home Maintenance, Steve brings over 35 years of experience in joinery and carpentry, offering expert craftsmanship with a personal touch. Whether it's custom woodwork, repairs, or home improvements, every project is completed with care, precision, and a commitment to quality.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-800">
                    <h3 className="text-xl font-semibold mb-3 text-amber-900">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To provide reliable, high-quality, and affordable carpentry and home maintenance services that enhance the beauty and functionality of your home. Based in Chelmsford, SP Carpentry proudly serves the surrounding areas, offering a trusted, local service.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-800">
                    <h3 className="text-xl font-semibold mb-3 text-amber-900">No Job Too Small</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Whether you need a quick repair, a full day of handyman work, or a custom-built piece, Steve is happy to help. Free quotes are always available, ensuring fair pricing and honest advice with no obligation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Our Work</h2>
              <p className="text-center text-gray-600 mb-12 text-lg">See examples of our quality craftsmanship</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((item) => (
                  <div 
                    key={item.id}
                    className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-amber-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                      <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold px-4">
                        {item.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center bg-amber-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">How to Add Your Photos</h3>
                <p className="text-gray-600">
                  Replace the placeholder divs with img tags containing your actual project images. Each image should showcase your best work!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-white pt-8">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center -mt-10 mb-8">Contact Us</h2>
              <p className="text-lg text-gray-700 text-center mb-6">
                To contact SP Carpentry and Home Maintenance please use the contact form below or call 07789347275. We will endeavour to return your call or email within 24 hours.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <form 
                    action="https://api.web3forms.com/submit" 
                    method="POST" 
                    className="space-y-4"
                  >

                  <input 
                    type="hidden" 
                    name="access_key" 
                    value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} 
                  />

                    <input 
                      type="hidden" 
                      name="redirect" 
                      value="https://web3forms.com/success" 
                    />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        minLength={2}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        required
                        minLength={10}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                      ></textarea>
                    </div>

                    {/* Honeypot field to prevent spam */}
                    <input 
                      type="checkbox" 
                      name="botcheck" 
                      className="hidden" 
                      style={{display: 'none'}} 
                    />

                    <button
                      type="submit"
                      className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-800" />
                    <span>07789347275</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-800" />
                    <span>SPCandHome@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-amber-800" />
                    <span>Chelmsford, Essex</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-8"> 
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="font-bold text-lg">SP Carpentry & Home Maintenance</span>
            </div>
            <p className="text-amber-200">35+ Years of Quality Craftsmanship</p>
            <p className="text-amber-200 mt-2">Chelmsford, Essex</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;