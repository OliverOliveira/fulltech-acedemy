import { HeroImage } from "./hero-image";



export default function HeroSession() {
  return (
    <div className="flex items-center justify-center w-full gap-6">
      <div className="flex flex-col w-1/2">
        <div>
            <h2 className="text-7xl font-bold">Aprenda.</h2>
            <h2 className="text-7xl font-bold text-ring">Crie.</h2>
            <h2 className="text-7xl font-bold text-accent">Impacte.</h2>
        </div>
        <div className="relative">
            <p className=" text-4xl font-caveat">Cursos online para mentes curiosas que querem construir o futuro.</p>
            <svg 
                viewBox="0 0 200 8"
                fill="none"
                className="absolute -bottom-4 -right-32 w-full"
            >
                <path 
                    stroke="#080F3B"
                    strokeWidth="1"
                    strokeLinecap="round"
                    d="M1.00024 4.94464C1.00024 4.94464 13.574 2.23144 21.5002 1.44458C29.4668 0.653705 42.0002 1.44458 42.0002 1.44458M42.0002 1.44458C42.0002 1.44458 27.0002 3.44464 16.5002 6.44464M42.0002 1.44458C42.0002 1.44458 57.0002 0.444279 66.0002 1.44458"
                />
            </svg>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <HeroImage />
      </div>
    </div>
  );
}
