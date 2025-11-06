"use client";

import { useEffect, useRef, useState } from "react";

import SupportSection from "@/components/user/common/SupportSection";

import MainBanner from "./-components/MainBanner";
import MainSection1 from "./-components/MainSection1";
import MainSection2 from "./-components/MainSection2";

export default function Main() {
    const sect3Ref = useRef<HTMLDivElement>(null);
    const [sect3On, setSect3On] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLDivElement;
                        if (target === sect3Ref.current) setSect3On(true);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px",
            },
        );

        const refs = [sect3Ref];
        refs.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            refs.forEach(ref => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    return (
        <>
            <MainBanner />
            <MainSection1 />
            <MainSection2 />
            <SupportSection sectRef={sect3Ref} sectOn={sect3On} />
        </>
    );
}
