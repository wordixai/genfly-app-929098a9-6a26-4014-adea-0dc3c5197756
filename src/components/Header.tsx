import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glassmorph">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Desktop Navigation - Left */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover-benzamia-gold transition-colors font-medium">
                Accueil
              </a>
              <a href="#projets" className="text-white hover-benzamia-gold transition-colors font-medium">
                Nos Projets
              </a>
            </div>

            {/* Logo - Center */}
            <div className="flex-shrink-0">
              <a href="#" className="block">
                <img 
                  src="https://benzamiapromotion.com/wp-content/uploads/2025/02/2-1-e1740428924482.png" 
                  alt="Benzamia Promotion" 
                  className="h-16 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-white hover-benzamia-gold transition-colors font-medium">
                A Propos
              </a>
              <a href="#contact" className="text-white hover-benzamia-gold transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <img 
                src="https://benzamiapromotion.com/wp-content/uploads/2025/02/2-1-e1740428924482.png" 
                alt="Benzamia Promotion" 
                className="h-12 w-auto"
              />
              <button 
                onClick={toggleMenu}
                className="text-white p-2"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center space-y-8 px-6">
              <a 
                href="#" 
                className="text-white text-2xl font-medium hover-benzamia-gold transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </a>
              <a 
                href="#projets" 
                className="text-white text-2xl font-medium hover-benzamia-gold transition-colors"
                onClick={toggleMenu}
              >
                Nos Projets
              </a>
              <a 
                href="#about" 
                className="text-white text-2xl font-medium hover-benzamia-gold transition-colors"
                onClick={toggleMenu}
              >
                A Propos
              </a>
              <a 
                href="#contact" 
                className="text-white text-2xl font-medium hover-benzamia-gold transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>

            {/* Social Media */}
            <div className="p-6 border-t border-gray-700">
              <h3 className="text-white text-lg font-medium mb-4">Suivez Nous</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/share/1EHoHSeCpP/?mibextid=wwXIfr" 
                  className="bg-benzamia-gold p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/benzamia.promotion?igsh=MWc4NWV0aW10M2R3OA==" 
                  className="bg-benzamia-gold p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/innovim-promotion-immobili%C3%A8re-445389323" 
                  className="bg-benzamia-gold p-3 rounded-full text-white hover:bg-opacity-80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;