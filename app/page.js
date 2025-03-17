import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />
      <section className="relative bg-blue-600 text-white py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Trouvez votre espace idéal</h1>
        <p className="text-lg mb-6">
          Louez un parking, un garage ou un box de stockage à Bruxelles.
        </p>

        {/* Barre de recherche */}
        <div className="absolute bottom-[-30px] bg-white shadow-lg rounded-lg p-4 flex w-4/5 md:w-3/5">
          <input
            type="text"
            placeholder="Recherchez un parking, garage..."
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-r-lg hover:bg-yellow-500 transition">
            Rechercher
          </button>
        </div>
      </section>

      {/* Section suivante */}
      <section className="pt-24 container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Nos annonces
        </h2>
        <p className="text-gray-600">
          Découvrez nos dernières annonces de parkings, garages et boxes.
        </p>
      </section>
    </div>
  );
};

export default Home;

