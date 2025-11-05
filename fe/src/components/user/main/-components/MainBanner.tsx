"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { API_URL } from "@/config/apiConfig";
import { useGetBannerList } from "@/service/user/main";

interface BannerItem {
    idx: number;
    b_file: string;
    b_title: string;
    b_open: string[];
    b_s_date: string;
    b_e_date: string;
    b_url: string;
    b_url_target: string;
}

const swiperStyle = `
    pb-[64px]
    xl:pb-0
    [&>.swiper-pagination]:leading-[0]
    [&>.swiper-pagination]:flex
    [&>.swiper-pagination]:gap-[12px]
    [&>.swiper-pagination]:justify-start
    [&>.swiper-pagination]:px-[16px]
    [&>.swiper-pagination]:!bottom-[16px]
    [&>.swiper-pagination>.swiper-pagination-bullet-active]:!bg-primary 
    [&>.swiper-pagination>.swiper-pagination-bullet]:!mx-0
    [&>.swiper-pagination>.swiper-pagination-bullet]:bg-[#F2F2F2]
    [&>.swiper-pagination>.swiper-pagination-bullet]:opacity-100
    md:[&>.swiper-pagination]:px-[28px]
    md:[&>.swiper-pagination]:gap-[12px]
    md:[&>.swiper-pagination>.swiper-pagination-bullet]:size-[16px]
    xl:[&>.swiper-pagination]:px-[40px]
    xl:[&>.swiper-pagination]:!bottom-[20px]
`;

export default function MainBanner() {
    const router = useRouter();
    const [type, setType] = useState<"P" | "M">("P");
    const [bannerList, setBannerList] = useState<BannerItem[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { data: configBannerData } = useGetBannerList("100", type);

    // 디바이스 크기에 따른 타입 설정
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1280) {
                setType("M");
            } else {
                setType("P");
            }
        };

        // 초기 설정
        handleResize();

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener("resize", handleResize);

        // 클린업
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // 메인 배너 목록 조회
    useEffect(() => {
        if (configBannerData) {
            const list = configBannerData.data.data_list;

            const getDateString = (date: Date) => date.toISOString().slice(0, 10);

            const currentDateStr = getDateString(new Date());

            const updatedList = list.filter((item: BannerItem) => {
                if (item.b_open.includes("N")) return false;

                // 시작일 체크
                if (item.b_s_date) {
                    const startDate = new Date(item.b_s_date.replace(/\./g, "-"));
                    const startDateStr = getDateString(startDate);
                    if (startDateStr > currentDateStr) return false;
                }

                // 종료일 체크
                if (item.b_e_date) {
                    const endDate = new Date(item.b_e_date.replace(/\./g, "-"));
                    const endDateStr = getDateString(endDate);
                    if (endDateStr < currentDateStr) return false; // 오늘까지 노출
                }

                return true;
            });
            setBannerList(updatedList);
        } else {
            setBannerList([]);
        }
    }, [configBannerData]);

    return (
        <div className="relative max-w-[1720px] px-[20px] md:px-[28px] min-[1760px]:px-0">
            {bannerList.length > 0 && (
                <>
                    <Swiper
                        loop={true}
                        className={swiperStyle}
                        pagination={{
                            clickable: true,
                        }}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true,
                        }}
                        onSlideChange={swiper => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        onInit={swiper => {
                            setActiveIndex(swiper.realIndex);
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, EffectFade]}
                        observer={true}
                        observeParents={true}
                    >
                        {bannerList.map((item, index) => {
                            return (
                                <SwiperSlide
                                    key={`main_banner_${index}`}
                                    className={`${item.b_url ? "cursor-pointer" : ""}`}
                                    onClick={() => {
                                        if (item.b_url) {
                                            if (item.b_url_target === "2") {
                                                window.open(item.b_url, "_blank", "noopener,noreferrer");
                                            } else {
                                                router.push(item.b_url);
                                            }
                                        }
                                    }}
                                >
                                    <div className="w-full overflow-hidden rounded-[20px] md:rounded-[40px]">
                                        <img
                                            src={`${API_URL}/${item.b_file}`}
                                            alt={item.b_title}
                                            className={`transition-transform duration-1000 ease-in-out ${
                                                activeIndex === index ? "scale-[1.1]" : ""
                                            }`}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <div className="absolute bottom-0 left-0 z-[1] min-w-[220px] rounded-[0_20px_0_0] bg-white p-[16px_16px_28px] md:min-w-[480px] md:rounded-[0_40px_0_0] md:p-[16px_20px_40px] xl:min-w-[200px] xl:rounded-[0_60px_0_0] xl:p-[20px_40px_46px]">
                            <div className="text-[20px] font-[700] md:text-[36px] xl:text-[40px]">
                                <span className="text-[#23AA4B]">역사대화</span>를 통해
                                <p className="md:pl-[100px] xl:pl-[120px]">
                                    <span className="text-[#23AA4B]">평화</span>를 만들어 갑니다.
                                </p>
                            </div>
                        </div>
                    </Swiper>
                </>
            )}
        </div>
    );
}
