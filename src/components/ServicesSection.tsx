import { Home, Users, Award, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Conception Sur Mesure",
      description: "Des appartements conçus selon vos besoins et préférences"
    },
    {
      icon: <Users size={40} />,
      title: "Accompagnement Personnalisé",
      description: "Une équipe dédiée pour vous guider à chaque étape"
    },
    {
      icon: <Award size={40} />,
      title: "Qualité Premium",
      description: "Des finitions haut de gamme et des matériaux de qualité"
    },
    {
      icon: <Clock size={40} />,
      title: "Livraison Dans Les Délais",
      description: "Respect des échéances et transparence totale"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nos <span className="benzamia-gold">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour vous accompagner dans votre projet immobilier
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors appear appear-${index + 1}`}
            >
              <div className="text-benzamia-gold mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;