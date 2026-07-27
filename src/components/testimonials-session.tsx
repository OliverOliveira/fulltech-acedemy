"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialsCard from "./testimonial-card";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        avatar: "/avatars/joao.png",
        name: "João Silva",
        testimonial:
            "A comunidade é incrível! Aprendi muito e fiz ótimos contatos.",
    },
    {
        avatar: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=",
        name: "Maria Oliveira",
        testimonial:
            "A comunidade é incrível! Aprendi muito e fiz ótimos contatos.",
    },
    {
        avatar: "/avatars/carlos.png",
        name: "Carlos Souza",
        testimonial:
            "A comunidade é incrível! Aprendi muito e fiz ótimos contatos.",
    },
];

export default function TestimonialsSession() {
    const sectionRef = useRef<HTMLElement>(null);
    const backgroundBlobRef = useRef<SVGSVGElement>(null);
    const titleWrapRef = useRef<HTMLDivElement>(null);
    const titleUnderlineRef = useRef<SVGPathElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const cornerLeftRef = useRef<SVGSVGElement>(null);
    const cornerRightRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gridRef.current
                ? gsap.utils.toArray<HTMLElement>(gridRef.current.children)
                : [];

            const underlinePath = titleUnderlineRef.current;
            const underlineLength = underlinePath?.getTotalLength() ?? 0;
            if (underlinePath) {
                gsap.set(underlinePath, {
                    strokeDasharray: underlineLength,
                    strokeDashoffset: underlineLength,
                });
            }

            gsap.set(backgroundBlobRef.current, { opacity: 0, scale: 0.92 });
            gsap.set(cornerLeftRef.current, { opacity: 0, y: 30, rotate: -8 });
            gsap.set(cornerRightRef.current, { opacity: 0, y: -30, rotate: 8 });

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });

            tl.to(backgroundBlobRef.current, { opacity: 1, scale: 1, duration: 0.9 })
                .from(
                    titleWrapRef.current,
                    { opacity: 0, y: 24, duration: 0.6 },
                    "-=0.6"
                )
                .to(
                    underlinePath ?? [],
                    { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
                    "-=0.2"
                )
                .from(
                    cards,
                    { opacity: 0, y: 40, rotate: -2, duration: 0.6, stagger: 0.15 },
                    "-=0.3"
                )
                .to(
                    cornerLeftRef.current,
                    { opacity: 1, y: 0, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.6)" },
                    "-=0.5"
                )
                .to(
                    cornerRightRef.current,
                    { opacity: 1, y: 0, rotate: 0, duration: 0.7, ease: "elastic.out(1, 0.6)" },
                    "-=0.6"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full">
            <svg
                ref={backgroundBlobRef}
                viewBox="0 0 933 254"
                fill="none"
                className="absolute top-0 left-0 bottom-0 right-0 text-chart-3/40"
            >
                <path d="M201.694 8.39572C139.764 6.81545 108.694 -3.10405 43.1941 1.89572C28.3857 3.02608 19.1988 8.484 9.69413 19.8957C-3.10479 35.2627 1.19413 70.3957 1.19413 70.3957C1.19413 70.3957 -0.194656 121.859 6.19413 153.896C11.8216 182.115 10.4011 193.496 30.6941 213.896C45.2897 228.568 56.0914 245.434 76.6941 247.396C139.694 253.396 236.194 253.396 236.194 253.396H612.194H856.194C856.194 253.396 896.194 254.481 905.194 247.396C916.627 238.396 918.022 227.818 923.194 213.896C932.295 189.397 930.694 147.396 930.694 147.396C930.694 147.396 934.194 82.396 930.694 42.8957C929.63 30.8807 925.076 23.4776 915.694 15.8957C904.079 6.50823 878.194 8.39572 878.194 8.39572C878.194 8.39572 749.037 13.5258 666.194 13.396C586.864 13.2717 542.487 9.49499 463.194 8.39572C361.082 6.9801 303.783 11.0007 201.694 8.39572Z" fill="currentColor" stroke="currentColor" />
            </svg>

            <div className="container mx-auto p-6 sm:p-8 md:p-12 flex flex-col md:flex-row flex-1 gap-8 md:gap-4">
                <div ref={titleWrapRef} className="relative h-fit md:min-w-64">
                    <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left">
                        O que nossa comunidade diz
                    </h2>
                    <svg
                        viewBox="0 0 200 8"
                        fill="none"
                        className="absolute -bottom-2 left-0 -right-2 text-primary hidden md:block"
                    >
                        <path
                            ref={titleUnderlineRef}
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            d="M1.00024 4.94464C1.00024 4.94464 13.574 2.23144 21.5002 1.44458C29.4668 0.653705 42.0002 1.44458 42.0002 1.44458M42.0002 1.44458C42.0002 1.44458 27.0002 3.44464 16.5002 6.44464M42.0002 1.44458C42.0002 1.44458 57.0002 0.444279 66.0002 1.44458"
                        />
                    </svg>
                </div>
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full"
                >
                    {testimonials.map((depoiment, idx) => (
                        <TestimonialsCard
                            key={idx}
                            avatar={depoiment.avatar}
                            name={depoiment.name}
                            testimonial={depoiment.testimonial}
                        />
                    ))}
                </div>
            </div>

            {/* SVG de cantos */}
            <svg
                ref={cornerLeftRef}
                width="181"
                height="132"
                viewBox="0 0 181 132"
                fill="none"
                className="absolute -left-2 bottom-0 text-primary hidden sm:block w-25 sm:w-32.5 md:w-45.25 h-auto"
            >
                <path d="M23.2733 2.21033C14.1508 5.04189 9.29673 9.79739 4.77334 18.2103C-1.23709 29.389 -0.602989 39.2133 4.77334 50.7103C9.10137 59.9656 23.2733 69.2103 23.2733 69.2103C23.2733 69.2103 32.8613 77.1631 35.7733 84.2103C39.5019 93.2334 33.007 100.21 35.7733 109.21C38.115 116.829 39.7802 122.089 46.2733 126.71C53.8489 132.102 60.7095 131.103 69.8387 129.774L70.2733 129.71C79.7887 128.326 83.3017 121.368 92.7733 119.71C99.5052 118.532 103.44 119.597 110.273 119.71C122.782 119.917 129.928 123.237 142.273 121.21C152.694 119.499 159.65 118.958 167.773 112.21C174.605 106.535 179.704 102.074 180.273 93.2103C180.773 85.4306 178.63 79.8555 172.773 74.7103C167.81 70.3496 163.267 70.4288 156.773 69.2103C148.521 67.662 142.771 72.9893 135.273 69.2103C130.463 66.786 126.857 64.8587 125.273 59.7103C123.273 53.2104 118.773 41.7103 118.773 41.7103C118.773 41.7103 112.706 32.9951 106.773 30.7103C100.942 28.4647 97.7734 29.2104 90.7733 30.7103C82.9453 32.3876 77.4659 34.226 70.2733 30.7103C64.314 27.7974 58.7733 18.2103 58.7733 18.2103C58.7733 18.2103 52.6871 7.75794 46.2733 4.21033C38.3839 -0.153547 31.884 -0.462344 23.2733 2.21033Z" fill="currentColor" stroke="currentColor" />
            </svg>

            <svg
                ref={cornerRightRef}
                width="83"
                height="134"
                viewBox="0 0 83 134"
                fill="none"
                className="absolute top-0 -right-2 text-destructive hidden sm:block w-11.25 sm:w-15 md:w-20.75 h-auto"
            >
                <path d="M21.2056 4.65246C11.9921 9.4773 8.38361 15.6282 4.20561 25.1525C2.2446 29.6228 1.12684 32.2891 0.705609 37.1525C0.104201 44.096 0.693548 48.6325 4.20561 54.6525C7.40915 60.1436 16.2056 65.6525 16.2056 65.6525C16.2056 65.6525 25.1858 69.4133 28.7056 74.1525C32.3521 79.0622 33.2056 83.0367 33.2056 89.1525C33.2056 97.1523 29.7056 101.152 28.7056 109.152C27.9966 114.825 27.8303 118.712 30.7056 123.652C33.6522 128.715 36.8768 132.07 42.7056 132.652C52.7056 133.652 59.8253 130.403 67.7056 123.652C74.4962 117.835 76.8573 112.628 79.7056 104.152C82.213 96.6912 82.4941 92.0184 82.2056 84.1525C81.9361 76.8045 79.3965 73.1579 78.7056 65.6525C77.9108 57.0179 80.5212 52.2851 79.7056 43.6525C78.8285 34.3681 77.7056 27.6525 71.7056 21.1525C65.7056 14.6524 51.7056 2.6524 42.7056 1.15246C33.7056 -0.347488 28.7416 0.706052 21.2056 4.65246Z" fill="currentColor" stroke="currentColor" />
            </svg>
        </section>
    );
}