import Link from 'next/link';

const Header = () => (
    <header className="bg-white shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="text-blue-600 font-bold text-xl">Box.brussels</div>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link href="/listings" className="text-gray-700 hover:text-blue-600">
                        Annonces
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
