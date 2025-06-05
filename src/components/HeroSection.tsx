import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="hero-video"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://benzamiapromotion.com/wp-content/uploads/2025/02/C5764.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl font-medium mb-4 appear appear-1">
          Promotion Immobilière BENZAMIA
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 appear appear-2">
          Trouvez Votre Appartement Neuf à Chlef
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto appear appear-3">
          Investissez dans un logement de qualité, alliant confort, sécurité et proximité des commodités. 
          Trouvez votre futur chez-vous dès aujourd'hui !
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projets" 
            className="bg-benzamia-gold text-white px-8 py-4 rounded-lg font-medium button-hover-effect appear appear-4 hover:bg-opacity-90 transition-all"
          >
            Projets En Cours
          </a>
          
          <a 
            href="#contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium button-hover-effect appear appear-5 hover:bg-white hover:text-black transition-all"
          >
            Contact
          </a>
        </div>

        {/* Play Button for Mobile */}
        <div className="mt-12 md:hidden">
          <button className="bg-benzamia-gold p-4 rounded-full text-white hover:bg-opacity-80 transition-colors">
            <Play size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;