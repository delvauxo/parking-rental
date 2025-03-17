import Head from 'next/head';

const Listings = () => {
    return (
        <div>
            <Head>
                <title>Box.brussels - Annonces de parkings, garages et boxes</title>
                <meta name="description" content="Explorez nos annonces de parkings, garages et boxes disponibles à Bruxelles." />
            </Head>

            <header>
                <h1>Annonces disponibles</h1>
            </header>

            <main>
                <section>
                    <h2>Liste des espaces</h2>
                    {/* Ici tu afficheras la liste des annonces */}
                </section>
            </main>
        </div>
    );
};

export default Listings;
