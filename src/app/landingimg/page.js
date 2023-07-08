import Image from 'next/image'

export default function LandingImg() {
    return (
        <div className="bg-gradient-to-r from-red-100 to-blue-600 w-full h-full bg-fixed centered md:h-screen hover:max-h-screen">
        <Image
            src="/maxion_logo.png"
            width={0}
            height={0}
            alt="Maxion"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            priority={true}
            style={{ width: '50%', height: 'auto' }}
        />
    </div>
    );
}