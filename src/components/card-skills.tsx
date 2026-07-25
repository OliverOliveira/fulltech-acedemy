import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CardSkillsProps {
    title: string;
    description: string;
    icon: ReactNode;
    svg: ReactNode;
    className?: string;
}

export default function CardSkills({ title, description, icon, svg, className }: CardSkillsProps) {
    return (
        <div className={`group relative flex flex-col gap-4 w-full py-12 px-8 ${className || ''}`}>
            {/* SVG de fundo com efeito de onda no hover */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center 
                           transition-transform duration-700 ease-in-out
                           group-hover:animate-wave"
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