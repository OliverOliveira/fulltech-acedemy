"use client";

import { ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useId, useRef, useState } from "react";
import { animate } from "motion/react";

interface CardSkillsProps {
    title: string;
    description: string;
    icon: ReactNode;
    svg: ReactNode;
    className?: string;
}

export default function CardSkills({ title, description, icon, svg, className }: CardSkillsProps) {
    const [isHovered, setIsHovered] = useState(false);
    const filterId = `wave-${useId().replace(/[:]/g, "")}`;
    const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
    const displacementRef = useRef<SVGFEDisplacementMapElement>(null);

    useEffect(() => {
        const controls = animate(0, 1, {
            duration: 2.4,
            repeat: isHovered ? Infinity : 0,
            ease: "linear", // <- progressão constante, sem "salto" ao reiniciar o ciclo
            onUpdate: (progress) => {
                const t = progress * Math.PI * 2;
                const scale = isHovered ? 14 + Math.sin(t) * 14 : 0; // <- ondas maiores
                const freq = 0.015 + (isHovered ? Math.sin(t) * 0.01 : 0);

                displacementRef.current?.setAttribute("scale", String(scale));
                turbulenceRef.current?.setAttribute("baseFrequency", `${freq} ${freq}`);
            },
        });

        return () => controls.stop();
    }, [isHovered]);

    return (
        <div
            className={`group relative flex flex-col gap-4 w-full py-12 px-8 overflow-hidden ${className || ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Definição do filtro de onda (invisível, não renderiza nada visualmente) */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence
                            ref={turbulenceRef}
                            type="fractalNoise"
                            baseFrequency="0.015 0.015"
                            numOctaves={2}
                            seed={7}
                            result="noise"
                        />
                        <feDisplacementMap
                            ref={displacementRef}
                            in="SourceGraphic"
                            in2="noise"
                            scale="0"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>

            {/* SVG de fundo — o filtro distorce o path internamente */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                style={{ filter: `url(#${filterId})` }}
            >
                {svg}
            </div>

            {/* Conteúdo do card (fica acima do SVG) */}
            <div className="relative z-10">
                {icon}
            </div>
            <div className="relative z-10 flex flex-col gap-2 flex-1">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-sm flex-1">
                    {description}
                </p>
                <ArrowRight className="mt-2 scale-x-150 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
        </div>
    );
}