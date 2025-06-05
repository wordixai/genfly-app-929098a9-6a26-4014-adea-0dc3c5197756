import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contactez <span className="benzamia-gold">Nous</span>
              </h2>
              <p className="text-lg text-gray-600">
                Notre équipe est à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans votre projet immobilier.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-benzamia-gold p-3 rounded-lg text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                  <p className="text-gray-600">+213 27 XX XX XX</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-benzamia-gold p-3 rounded-lg text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">contact@benzamiapromotion.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-benzamia-gold p-3 rounded-lg text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                  <p className="text-gray-600">Chlef, Algérie</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-benzamia-gold p-3 rounded-lg text-white">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                  <p className="text-gray-600">
                    Dimanche - Jeudi: 8h00 - 17h00<br />
                    Samedi: 8h00 - 12h00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input 
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent">
                  <option>Demande d'information</option>
                  <option>Visite d'appartement</option>
                  <option>Devis personnalisé</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea 
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-benzamia-gold focus:border-transparent"
                  placeholder="Décrivez votre projet ou vos questions..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-benzamia-gold text-white py-3 rounded-lg font-medium button-hover-effect hover:bg-opacity-90 transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;