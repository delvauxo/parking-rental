'use client';  // Directive pour marquer le fichier comme composant client

import { useParams } from 'next/navigation';  // Utilisation de useParams pour obtenir l'ID
import Head from 'next/head';

const ListingDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Head>
                <title>Détails de l'annonce {id}</title>
                <meta name="description" content={`Détails de l'annonce #${id} - Box.brussels`} />
            </Head>

            <header>
                <h1>Détails de l'annonce {id}</h1>
            </header>

            <main>
                <section>
                    {/* Détails de l'annonce ici */}
                    <p>Affichage des détails pour l'annonce {id}</p>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Box.brussels</p>
            </footer>
        </div>
    );
};

export default ListingDetails;
