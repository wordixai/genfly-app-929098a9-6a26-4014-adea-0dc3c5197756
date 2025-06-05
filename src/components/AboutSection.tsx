const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Propos de <span className="benzamia-gold">BENZAMIA Promotion Immobilière</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2013, Benzamia Promotion Immobilière est un acteur incontournable du secteur 
                immobilier dans la wilaya de Chlef. Avec 260 appartements livrés sur 3 sites et 192 
                appartements en cours de réalisation sur 2 sites, nous avons su bâtir une réputation 
                solide grâce à notre engagement envers l'excellence et la satisfaction de nos clients.
              </p>
              
              <p>
                Nous offrons bien plus que de simples appartements : nous concevons des espaces de vie 
                élégants et fonctionnels, où confort et modernité se conjuguent harmonieusement. Nos 
                projets se distinguent par des prestations haut de gamme, des finitions soignées et des 
                emplacements stratégiques, garantissant ainsi un cadre de vie d'exception.
              </p>
            </div>

            <a 
              href="#" 
              className="inline-block bg-benzamia-gold text-white px-8 py-3 rounded-lg font-medium button-hover-effect hover:bg-opacity-90 transition-all"
            >
              En Savoir Plus
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-benzamia-gold to-yellow-600 p-8 rounded-2xl shadow-2xl">
              <div className="bg-white p-1 rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Modern apartment building" 
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Decorative line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-1 bg-benzamia-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;