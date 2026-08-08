import { ComponentType, ReactNode, SVGProps } from "react";


interface StatsCardProps {
    title: string;
    value: number;
    description: string;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    BgSvg: ReactNode;
    LineSvg: ReactNode;
    cardColor: string;
}

export function StatsCard({ title, value, Icon, BgSvg, cardColor, description, LineSvg }: StatsCardProps) {
    return (
        <div className="relative w-full min-h-30">
            <div className="absolute inset-0 opacity-20" style={{ color: `var(--${cardColor})` }}>
                {BgSvg}
            </div>
            <div className="w-full h-full flex gap-2 p-4 py-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center`} style={{ backgroundColor: `var(--${cardColor})` }}>
                    <Icon className="text-white text-5xl font-bold" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">{title}</span>
                    <span className="text-3xl font-bold">{value}</span>
                    <span className="text-sm">{description}</span>
                    <div style={{ color: `var(--${cardColor})` }}>{LineSvg}</div>
                </div>
            </div>
        </div>
    );
}