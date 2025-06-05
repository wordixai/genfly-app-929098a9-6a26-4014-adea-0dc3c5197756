import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Résidence Azhar II",
      location: "Ouled Mohamed, Chlef",
      image: "https://benzamiapromotion.com/wp-content/uploads/2025/02/RENDU-9.webp",
      features: ["Parking", "Locaux Commerciaux", "Sécurité H24", "Aire de Jeux"],
      apartmentTypes: ["F4"],
      available: true,
      link: "#"
    },
    {
      title: "Résidence La Cité",
      location: "Zone différée, Chlef",
      image: "https://benzamiapromotion.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-16-at-1.28.42-PM-3_4_11zon.webp",
      features: ["Parking", "Centre Commercial", "Sécurité H24", "Jardin Privé"],
      apartmentTypes: ["F2", "F3", "F4", "Duplex"],
      available: true,
      link: "#"
    }
  ];

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Projets <span className="benzamia-gold">En Cours</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nos nouvelles promotions immobilières à Chlef prennent vie ! Profitez d'appartements 
            modernes en cours de réalisation, pensés pour votre confort et votre bien-être. 
            Saisissez l'opportunité d'investir dans un cadre idéal avec BENZAMIA.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`appear appear-${index + 1}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;