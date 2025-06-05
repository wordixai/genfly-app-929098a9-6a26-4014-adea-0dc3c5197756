import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="https://benzamiapromotion.com/wp-content/uploads/2025/02/2-1-e1740428924482.png" 
              alt="Benzamia Promotion" 
              className="h-16 w-auto"
            />
            <p className="text-gray-300">
              Promotion Immobilière BENZAMIA - Votre partenaire de confiance pour 
              trouver l'appartement de vos rêves à Chlef.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1EHoHSeCpP/?mibextid=wwXIfr" 
                className="bg-benzamia-gold p-2 rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/benzamia.promotion?igsh=MWc4NWV0aW10M2R3OA==" 
                className="bg-benzamia-gold p-2 rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/innovim-promotion-immobili%C3%A8re-445389323" 
                className="bg-benzamia-gold p-2 rounded-full hover:bg-opacity-80 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Liens Rapides</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover-benzamia-gold transition-colors">
                Accueil
              </a>
              <a href="#projets" className="block text-gray-300 hover-benzamia-gold transition-colors">
                Nos Projets
              </a>
              <a href="#about" className="block text-gray-300 hover-benzamia-gold transition-colors">
                A Propos
              </a>
              <a href="#contact" className="block text-gray-300 hover-benzamia-gold transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-benzamia-gold" />
                <span className="text-gray-300">Chlef, Algérie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-benzamia-gold" />
                <span className="text-gray-300">+213 27 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-benzamia-gold" />
                <span className="text-gray-300">contact@benzamiapromotion.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Benzamia Promotion Immobilière. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;