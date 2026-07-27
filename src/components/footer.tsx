"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const backgroundBlobRef = useRef<SVGSVGElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentColRef = useRef<HTMLDivElement>(null);
    const topLeftDoodleRef = useRef<SVGSVGElement>(null);
    const bottomRightDoodleRef = useRef<SVGSVGElement>(null);
    const topLeftPathRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const doodlePath = topLeftPathRef.current;
            const doodleLength = doodlePath?.getTotalLength() ?? 0;
            if (doodlePath) {
                gsap.set(doodlePath, {
                    strokeDasharray: doodleLength,
                    strokeDashoffset: doodleLength,
                });
            }

            gsap.set(backgroundBlobRef.current, { opacity: 0, scale: 0.94 });
            gsap.set(bottomRightDoodleRef.current, { opacity: 0, scale: 0.7, rotate: 10 });

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 98%",
                    once: true,
                },
            });

            tl.to(backgroundBlobRef.current, { opacity: 1, scale: 1, duration: 0.9 })
                .from(
                    headingRef.current,
                    { opacity: 0, y: 24, duration: 0.6 },
                    "-=0.6"
                )
                .from(
                    contentColRef.current,
                    { opacity: 0, y: 24, duration: 0.6 },
                    "-=0.4"
                )
                .to(
                    topLeftDoodleRef.current,
                    { opacity: 1, duration: 0.2 },
                    "-=0.5"
                )
                .to(
                    doodlePath ?? [],
                    { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
                    "<"
                )
                .to(
                    bottomRightDoodleRef.current,
                    { opacity: 1, scale: 1, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.6)" },
                    "-=0.4"
                );
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer
            ref={footerRef}
            className="w-full max-w-5xl mx-auto relative flex justify-center mt-8 px-4 sm:px-6"
        >
            <svg
                ref={backgroundBlobRef}
                viewBox="0 0 959 186"
                fill="none"
                className="absolute top-0 left-0 -bottom-6 right-0 text-chart-5 -z-10"
                preserveAspectRatio="none"
            >
                <path d="M15.1259 184.536H945.626L957.126 121.036C957.126 121.036 960.064 93.3646 954.626 77.0355C947.975 57.0645 939.771 51.747 922.626 39.5356C901.95 24.8096 884.011 23.0442 859.126 18.0355C802.835 6.70568 769.966 8.55069 712.626 5.53553C620.199 0.675418 568.171 6.81783 475.626 5.53553C398.675 4.46931 355.583 0.0614693 278.626 0.53553C216.698 0.917011 120.126 5.53553 120.126 5.53553C120.126 5.53553 77.3463 5.83 54.1259 18.0355C36.3537 27.3773 26.287 34.8457 15.1259 51.5355C-0.994544 75.6414 -0.140272 95.5407 1.09765 124.377L1.12592 125.036C2.14893 148.884 15.1259 184.536 15.1259 184.536Z" fill="currentColor" stroke="currentColor" />
            </svg>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 w-full z-10 py-10 sm:py-8 max-w-2xl">
                <h2
                    ref={headingRef}
                    className="text-xl sm:text-2xl font-bold sm:max-w-3xs"
                >
                    Pronto para construir o seu <span className="text-accent">futuro?</span>
                </h2>
                <div
                    ref={contentColRef}
                    className="flex flex-col items-center sm:items-start gap-2"
                >
                    <p>Junte-se a milhares de alunos que aprendem e controem todos os dias</p>
                    <Link
                        href="/login"
                        className="bg-destructive text-white px-6 py-4 rounded-full flex items-center justify-center transition-colors hover:bg-destructive/90"
                    >
                        Entrar na Fulltech Academy
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </Link>
                </div>
            </div>

            <svg
                ref={topLeftDoodleRef}
                width="212"
                height="112"
                viewBox="0 0 212 112"
                fill="none"
                className="absolute -left-6 top-8 text-ring hidden md:block w-35 lg:w-45 xl:w-53 h-auto"
            >
                <path
                    ref={topLeftPathRef}
                    d="M173.998 23.5L172.498 37.5L182.498 30.5L189.998 43L210.498 1.5L160.998 14.5L173.998 23.5ZM210.498 1.5L173.998 23.5M210.498 1.5L172.498 37.5M0.998413 86C0.998413 86 12.2662 96.059 20.9984 96C30.4437 95.9362 41.9984 84 41.9984 84C41.9984 84 52.1827 72.581 60.9984 71.5C67.118 70.7496 71.4622 70.9434 76.4984 74.5C81.5042 78.0351 84.4984 88 84.4984 88C84.4984 88 87.0082 99.9023 92.4984 104.5C97.9477 109.063 102.978 110.612 109.998 109.5C116.952 108.399 120.416 104.845 124.998 99.5C128.864 94.9913 129.701 91.4765 131.998 86C134.841 79.2218 134.326 74.6305 137.498 68C139.883 63.0149 140.885 59.6901 144.998 56C150.019 51.4965 156.034 54.0655 160.998 49.5C163.989 46.7495 166.998 41 166.998 41"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinejoin="round"
                />
            </svg>

            <svg
                ref={bottomRightDoodleRef}
                width="225"
                height="110"
                viewBox="0 0 225 110"
                fill="none"
                className="absolute -bottom-6 -right-8 text-accent hidden sm:block w-32.5 sm:w-40 lg:w-50 xl:w-56.25 h-auto"
            >
                <path d="M220.581 108.883H0.581144C0.581144 108.883 -0.116795 93.001 2.58114 83.3833C5.43538 73.2084 8.2011 67.4045 15.0811 59.3833C22.278 50.9927 27.7777 46.888 38.0811 42.8833C47.9913 39.0315 55.2202 43.3594 65.0811 39.3833L65.1545 39.3537C69.6483 37.5418 72.3154 36.4664 76.0811 33.3833C82.6633 27.9944 81.5922 20.9247 87.5811 14.8833C94.3002 8.10537 99.3243 4.70625 108.581 2.3833C118.257 -0.0447167 125.213 -0.684077 134.081 3.8833C144.721 9.36314 151.081 29.3833 151.081 29.3833C151.081 29.3833 153.98 42.4927 159.581 48.3833C164.521 53.5785 168.766 55.1587 175.581 57.3833C183.043 59.819 188.125 56.9298 195.581 59.3833C204.173 62.2106 209.12 65.0798 215.081 71.8833C220.032 77.5333 222.839 81.4748 224.081 88.8833C225.392 96.7034 220.581 108.883 220.581 108.883Z" fill="currentColor" stroke="currentColor" />
            </svg>
        </footer>
    );
}