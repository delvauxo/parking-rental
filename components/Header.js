import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
    <header className="absolute top-6 left-6 right-6 bg-gradient-to-b from-white/50 to-transparent z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
            {/* Logo + Nav */}
            <div className="flex items-center space-x-4">
                <Image src="/vercel.svg" alt="Logo" width={30} height={30} className="filter invert brightness-0 saturate-100 hue-rotate-60" />
                <div className="text-blue-800 flex items-center space-x-6">
                    <nav>
                        <ul className="flex space-x-4">
                            <li><Link href="/" className="text-gray-700 hover:text-blue-800">Accueil</Link></li>
                            <li><Link href="/listings" className="text-gray-700 hover:text-blue-800">Annonces</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Espace Connexion */}
            <div>
                <ul className="flex space-x-4">
                    <li><Link href="/login" className="text-gray-700 hover:text-blue-800">Connexion</Link></li>
                    <li><Link href="/register" className="text-gray-700 hover:text-blue-800">Inscription</Link></li>
                </ul>
            </div>
        </div>

        {/* Section Parking Rental */}
        <div className="container mx-auto mt-4 px-6">
            <h2 className="text-7xl text-blue-900 font-['Roboto'] font-bold">
                Parking <br /> Rental
            </h2>
            <p className="text-lg text-white mt-4">
                Trouvez ou louez un parking en quelques clics.
            </p>

            {/* Boutons avec espacement correct */}
            <div className="flex space-x-4 mb-10 mt-8">
                <Link href="/search">
                    <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-500 transition">
                        Trouver une place
                    </button>
                </Link>
                <Link href="/post">
                    <button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-800 transition">
                        Publier une annonce
                    </button>
                </Link>
            </div>
        </div>
    </header>
);

export default Header;
