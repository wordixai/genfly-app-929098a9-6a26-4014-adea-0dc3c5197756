import { MapPin, Car, Store, Shield, Trees } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  features: string[];
  apartmentTypes: string[];
  available: boolean;
  link: string;
}

const ProjectCard = ({ title, location, image, features, apartmentTypes, available, link }: ProjectCardProps) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'parking':
        return <Car size={20} />;
      case 'locaux commerciaux':
      case 'centre commercial':
        return <Store size={20} />;
      case 'sécurité h24':
        return <Shield size={20} />;
      case 'aire de jeux':
      case 'jardin privé':
        return <Trees size={20} />;
      default:
        return <Store size={20} />;
    }
  };

  return (
    <div className="project-card bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {available && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Disponible Pour Achat
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title and Location */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="text-benzamia-gold">
                {getFeatureIcon(feature)}
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Apartment Types */}
        <div>
          <span className="text-sm font-medium text-gray-700 block mb-2">
            Type d'appartements :
          </span>
          <div className="flex flex-wrap gap-2">
            {apartmentTypes.map((type, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <a 
          href={link}
          className="block w-full bg-benzamia-gold text-white text-center py-3 rounded-lg font-medium button-hover-effect hover:bg-opacity-90 transition-all"
        >
          Voir Plus
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;