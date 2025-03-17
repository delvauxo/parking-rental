import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative h-screen">
            <Image
                src="/assets/images/parking-hero-002.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
                <h1 className="text-5xl font-bold">Bienvenue sur Box.Brussels</h1>
            </div>
        </div>
    );
};

export default HeroSection;
