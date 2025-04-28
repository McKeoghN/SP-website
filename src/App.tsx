import { useState } from 'react';
import { Home, Hammer, PencilLine as Tools, Phone, Mail, MapPin, ChevronRight, Menu, X} from 'lucide-react';
import FadeIn from "../fadein-wrapper.tsx";
import HeroSection from './HeroSection'; // Adjust the import path as needed

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-amber-800 text-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => handleTabChange('home')}
              className="flex items-center space-x-2 hover:text-amber-200 transition-colors"
            >
              <Hammer className="w-8 h-8" />
              <span className="text-xl font-bold">SP Carpentry and Home Maintenance</span>
            </button>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handleTabChange('home')}
                className={`${activeTab === 'home' ? 'text-amber-200' : 'hover:text-amber-200'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleTabChange('about us')}
                className={`${activeTab === 'about us' ? 'text-amber-200' : 'hover:text-amber-200'}`}
              >
                About us
              </button>
              <button
                onClick={() => handleTabChange('services')}
                className={`${activeTab === 'services' ? 'text-amber-200' : 'hover:text-amber-200'}`}
              >
                Services
              </button>
              <button
                onClick={() => handleTabChange('contact')}
                className={`${activeTab === 'contact' ? 'text-amber-200' : 'hover:text-amber-200'}`}
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
                onClick={() => handleTabChange('home')}
                className={`block w-full text-left py-2 px-4 rounded ${
                  activeTab === 'home' ? 'bg-amber-700 text-amber-200' : 'hover:bg-amber-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleTabChange('services')}
                className={`block w-full text-left py-2 px-4 rounded ${
                  activeTab === 'services' ? 'bg-amber-700 text-amber-200' : 'hover:bg-amber-700'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleTabChange('contact')}
                className={`block w-full text-left py-2 px-4 rounded ${
                  activeTab === 'contact' ? 'bg-amber-700 text-amber-200' : 'hover:bg-amber-700'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <HeroSection />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <FadeIn>
                    <h1 className="text-4xl font-bold mb-4">Quality Craftsmanship</h1>
                    <p className="text-xl">Expert carpentry and home repair services</p>
                  </FadeIn>
                </div>
              </div>
            </div>

            <FadeIn delay={200}>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Home className="w-12 h-12 text-amber-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Home Maintenance</h3>
                  <p className="text-gray-600">Home maintenance services tailored to your needs.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Tools className="w-12 h-12 text-amber-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Custom Carpentry</h3>
                  <p className="text-gray-600">Bespoke furniture and woodwork created just for you.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Hammer className="w-12 h-12 text-amber-800 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Handyman jobs</h3>
                  <p className="text-gray-600">Quick and reliable services for your home.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {activeTab === 'about us' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <FadeIn>
                <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
              </FadeIn>
              <FadeIn delay={200}>  
                <p className="text-lg text-gray-700 text-center">
                At SP Carpentry & Home Maintenance, Steve brings over 35 years of experience in joinery and carpentry, offering expert craftsmanship with a personal touch. Whether it’s custom woodwork, repairs, or home improvements, every project is completed with care, precision, and a commitment to quality.
                </p>
              </FadeIn>
              <FadeIn delay={400}>  
                <p className="text-lg text-gray-700 text-center">
                Steve’s mission is simple: to provide reliable, high-quality, and affordable carpentry and home maintenance services that enhance the beauty and functionality of your home. Based in Chelmsford, SP Carpentry proudly serves the surrounding areas, offering a trusted, local service.
                </p>
              </FadeIn>
              <FadeIn delay={600}>
                <p className="text-lg text-gray-700 text-center">
                No job is too small—whether you need a quick repair, a full day of handyman work, or a custom-built piece, Steve is happy to help. Free quotes are always available, ensuring fair pricing and honest advice with no obligation. 
                </p>
              </FadeIn>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            </FadeIn>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <FadeIn delay={200}>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b pb-2">Carpentry Services</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Tools className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Built-in Cabinets & Shelving</p>
                      <p className="text-gray-600">Custom built-in solutions to maximise your space with style.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Tools className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Decorative Carpentry</p>
                      <p className="text-gray-600">Coving, Architraves and Skirting Boards</p>
                    </div>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={400}>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b pb-2">Home Maintenance</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Kitchen Renovations</p>
                      <p className="text-gray-600">Refresh kitchens with new doors and wooden worktops</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Door Hanging</p>
                      <p className="text-gray-600">Professional door hanging services including door furniture</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Home className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Flooring Fitting and Repairs</p>
                      <p className="text-gray-600">Installation and repairs of hardwood and laminate flooring.</p>
                    </div>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={600}>
                <h3 className="text-2xl font-semibold mb-6 text-amber-800 border-b pb-2">Handyman Services</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">General Repairs</p>
                      <p className="text-gray-600">Quick fixes and maintenance for your home.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Furniture Assembly</p>
                      <p className="text-gray-600">Professional assembly of flat-pack and ready-to-assemble furniture.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hanging & Mounting</p>
                      <p className="text-gray-600">Secure installation of TVs, artwork, shelves, and other wall-mounted items.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Wooden Garden Constructions</p>
                      <p className="text-gray-600">Professional installation and repairs of sheds and gazebos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Plumbing Jobs</p>
                      <p className="text-gray-600">Small jobs such as dropping radiators, toilet and shower installation and repair. *cannot do gas work*</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Gutter repairs</p>
                      <p className="text-gray-600">Quick and efficient gutter repairs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Hammer className="w-5 h-5 text-amber-800 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Tiling</p>
                      <p className="text-gray-600">Bespoke tiling</p>
                    </div>
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={800}>
                <div className="mt-8 text-center">
                  <button 
                    onClick={() => handleTabChange('contact')} 
                    className="bg-amber-800 text-white py-2 px-6 rounded-md hover:bg-amber-700 transition-colors inline-flex items-center"
                  >
                    Get a Quote <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
              <p className="text-lg text-gray-700 text-center mb-6">
                To contact SP Carpentry and Home Maintenance please use the contact form below or call 07789347275. We will endeavour to return your call or email within 24 hours.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={200}>
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
                    
                    {/* Optional: Redirect after submission */}
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
              </FadeIn>
            <FadeIn delay={200}>
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
            </FadeIn>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;