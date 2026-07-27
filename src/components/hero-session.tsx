"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { HeroImage } from "./hero-image";
import { ArrowUpRight } from "lucide-react";

export default function HeroSession() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingWrapRef = useRef<HTMLDivElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const underlinePathRef = useRef<SVGPathElement>(null);
    const buttonWrapRef = useRef<HTMLDivElement>(null);
    const buttonBlobRef = useRef<SVGSVGElement>(null);
    const imageWrapRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const headingLines = headingWrapRef.current
                ? gsap.utils.toArray<HTMLElement>(headingWrapRef.current.children)
                : [];

            // Prepara o traço do rabisco pra ser "desenhado"
            const underlinePath = underlinePathRef.current;
            const underlineLength = underlinePath?.getTotalLength() ?? 0;
            if (underlinePath) {
                gsap.set(underlinePath, {
                    strokeDasharray: underlineLength,
                    strokeDashoffset: underlineLength,
                });
            }

            gsap.set(buttonBlobRef.current, { scale: 0, transformOrigin: "50% 50%" });

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(headingLines, {
                opacity: 0,
                y: 50,
                rotate: -3,
                duration: 0.7,
                stagger: 0.12,
            })
                .from(
                    paragraphRef.current,
                    { opacity: 0, y: 20, duration: 0.6 },
                    "-=0.3"
                )
                .to(
                    underlinePath ?? [],
                    { strokeDashoffset: 0, duration: 0.6, ease: "power2.inOut" },
                    "-=0.2"
                )
                .from(
                    buttonWrapRef.current,
                    { opacity: 0, y: 16, duration: 0.4 },
                    "-=0.2"
                )
                .to(
                    buttonBlobRef.current,
                    { scale: 1, duration: 0.7, ease: "elastic.out(1, 0.55)" },
                    "-=0.3"
                )
                .from(
                    imageWrapRef.current,
                    { opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out" },
                    "-=0.9"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 h-auto lg:h-150 py-12 lg:py-0 px-4 sm:px-6 lg:px-0"
        >
            <div className="flex flex-col w-full lg:w-1/2 items-center text-center lg:items-start lg:text-left">
                <div ref={headingWrapRef}>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">Aprenda.</h2>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-ring">Crie.</h2>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-accent">Impacte.</h2>
                </div>
                <div className="relative mt-2">
                    <p
                        ref={paragraphRef}
                        className="text-2xl sm:text-3xl lg:text-4xl font-caveat max-w-xs sm:max-w-sm lg:max-w-none"
                    >
                        Cursos online para mentes curiosas que querem construir o futuro.
                    </p>
                    <svg
                        viewBox="0 0 200 8"
                        fill="none"
                        className="hidden lg:block absolute -bottom-4 -right-32 w-full"
                    >
                        <path
                            ref={underlinePathRef}
                            stroke="#080F3B"
                            strokeWidth="1"
                            strokeLinecap="round"
                            d="M1.00024 4.94464C1.00024 4.94464 13.574 2.23144 21.5002 1.44458C29.4668 0.653705 42.0002 1.44458 42.0002 1.44458M42.0002 1.44458C42.0002 1.44458 27.0002 3.44464 16.5002 6.44464M42.0002 1.44458C42.0002 1.44458 57.0002 0.444279 66.0002 1.44458"
                        />
                    </svg>
                </div>
                <div
                    ref={buttonWrapRef}
                    className="relative flex items-center justify-center lg:justify-start gap-4 mt-10 lg:mt-12 w-full max-w-xs sm:max-w-sm lg:w-2xl lg:max-w-2xl"
                >
                    <motion.div
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="relative"
                    >
                        <Link href="/cursos" className="flex p-6 group relative">
                            <div className="absolute -top-4 -left-6">
                                <svg
                                    ref={buttonBlobRef}
                                    viewBox="0 0 204 73"
                                    fill="none"
                                    className="w-full h-full"
                                >
                                    <path d="M29.0254 1.18636C19.0764 1.96357 12.9869 6.18324 7.02545 14.1864C2.56085 20.18 0.782879 24.7171 0.52545 32.1864C0.193224 41.8259 3.10943 47.9846 9.52545 55.1864C18.9323 65.7452 29.8841 66.1863 44.0254 66.1863C63.0255 66.1863 77.2341 68.1659 98.5255 69.1863C117.265 70.0845 127.892 73.3753 146.525 71.1863C159.462 69.6666 167.639 70.0124 179.025 63.6864C189.408 57.918 195.525 53.1864 201.025 42.6864C206.525 32.1864 198.025 14.1864 198.025 14.1864C198.025 14.1864 183.525 1.18623 167.525 1.18636C151.525 1.18649 128.233 3.5611 103.025 3.68636C74.1105 3.83005 61.0255 -1.31342 29.0254 1.18636Z" fill="#394A9F" stroke="#394A9F" />
                                </svg>
                            </div>
                            <span className="flex items-center justify-center gap-2 z-10 text-white font-bold text-lg">
                                Começar agora
                                <ArrowUpRight className="ml-2 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div
                ref={imageWrapRef}
                className="flex items-center justify-center w-full lg:w-1/2 h-72 sm:h-96 lg:h-full mt-4 lg:mt-0"
            >
                <HeroImage />
            </div>
        </div>
    );
}