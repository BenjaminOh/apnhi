"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import MoreButton from "@/components/user/button/MoreButton";
import NoImage from "@/components/user/common/NoImage";
import { useGetPostList } from "@/service/user/board";

interface Item {
    idx: number;
    b_title: string;
    b_reg_date: string;
    first_image: string | null;
}

export default function MainSection2() {
    const router = useRouter();
    const [items, setItems] = useState<Item[]>([]);
    const { data: configData } = useGetPostList("237", "4", "1", { enabled: true }, "", "", "");

    useEffect(() => {
        if (configData) {
            const data = configData.data;
            setItems(data.data_list);
        } else {
            setItems([]);
        }
    }, [configData]);

    if (items.length === 0) {
        return null;
    }

    return (
        <div className="relative mx-auto max-w-[1360px] p-[80px_20px_0] md:p-[120px_28px_0] xl:pt-[55px] min-[1400px]:px-0">
            <div className="flex items-end justify-between pb-[24px] md:pb-[40px]">
                <div>
                    <p className="font-[500] text-[#23AA4B] md:text-[18px]">Notice</p>
                    <p className="pt-[4px] text-[24px] font-[700] md:text-[40px]">공지사항</p>
                </div>
                <MoreButton
                    handleClick={() => {
                        router.push("/237");
                    }}
                />
            </div>
            <Swiper
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={"auto"}
                spaceBetween={20}
                modules={[Autoplay, Pagination]}
                observer={true}
                observeParents={true}
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide key={`notice_${index}`} className="!w-[240px] md:!w-[324px]">
                            <Link href={`/237/${item.idx}`} className="block">
                                <div className="relative h-[140px] w-full overflow-hidden rounded-[20px] md:h-[200px]">
                                    {item.first_image ? (
                                        <img
                                            src={item.first_image}
                                            alt="이미지"
                                            className="object-cove absolute inset-0 h-full w-full"
                                        />
                                    ) : (
                                        <NoImage />
                                    )}
                                </div>
                                <div className="py-[16px] md:py-[20px]">
                                    <p className="overflow-hidden text-[18px] font-[700] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [display:-webkit-box] md:text-[20px]">
                                        {item.b_title}
                                    </p>
                                    <p className="pt-[8px] text-[14px] font-[400] text-[#A3A3A5] md:text-[16px]">
                                        {item.b_reg_date}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
