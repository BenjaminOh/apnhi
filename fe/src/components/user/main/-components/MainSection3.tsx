"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import arrowRightWhite from "@/assets/images/user/arrowRightWhite.png";
import mainSection3Bg from "@/assets/images/user/mainSection3Bg.jpg";
import mainSection3Img from "@/assets/images/user/mainSection3Img.png";

export default function MainSection3() {
    const sectRef = useRef<HTMLDivElement>(null);
    const [sectOn, setSectOn] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLDivElement;
                        if (target === sectRef.current) setSectOn(true);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px",
            },
        );

        const refs = [sectRef];
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
        <div
            ref={sectRef}
            className="relative mx-auto max-w-[1360px] p-[80px_20px_0] md:p-[90px_28px_138px] xl:p-[120px_28px_130px] min-[1400px]:px-0"
        >
            <div className="mb-[24px] md:mb-[40px]">
                <p className="font-[500] text-[#23AA4B] md:text-[18px]">With Us</p>
                <p className="pt-[4px] text-[24px] font-[700] md:text-[40px]">후원하기</p>
            </div>
            <div className="relative -ml-[20px] w-[calc(100%+40px)] p-[40px] md:-ml-0 md:w-full xl:p-[60px_100px]">
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden md:rounded-[40px]">
                    <Image src={mainSection3Bg} alt="배경" fill objectFit="cover" />
                </div>
                <div
                    className={`relative z-[1] text-white transition-all duration-700 ease-in-out ${
                        sectOn ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <p className="text-[24px] font-[700] md:text-[28px] xl:text-[40px]">
                        동아시아의 평화를 위한
                        <br />
                        활동에 동참해 주세요!
                    </p>
                    <p className="pt-[12px] text-[18px] xl:text-[20px]">
                        아시아평화와역사교육연대(연구소)는 <br />
                        여러분의 소중한 후원으로 운영됩니다.
                    </p>
                    <a
                        href="https://link.donationbox.co.kr/donationBoxList.jsp?campaignuid=okIiz0H7Vu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-[16px] flex items-center gap-[10px]"
                    >
                        <p className="text-[20px]">후원하러 가기</p>
                        <Image src={arrowRightWhite} alt="바로가기" width={24} height={24} />
                    </a>
                </div>
                <div
                    className={`absolute bottom-[22px] right-[20px] hidden h-[300px] w-[310px] transition-all duration-700 ease-in-out md:block xl:bottom-[23px] xl:right-[123px] xl:h-[440px] xl:w-[452px] ${
                        sectOn ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
                    }`}
                >
                    <Image src={mainSection3Img} alt="이미지" fill objectFit="contain" />
                </div>
            </div>
        </div>
    );
}
