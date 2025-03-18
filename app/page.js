import HeroSection from '../components/HeroSection';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Header toujours au-dessus */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Contenu après Hero */}
      <section className="relative bg-blue-600 text-white py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Trouvez votre espace idéal</h1>
        <p className="text-lg mb-6">
          Louez un parking, un garage ou un box de stockage à Bruxelles.
        </p>
      </section>
    </div>
  );
};

export default Home;
