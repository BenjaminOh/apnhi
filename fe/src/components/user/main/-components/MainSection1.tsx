import Image from "next/image";

import mainSection1Bg1 from "@/assets/images/user/mainSection1Bg1.jpg";
import mainSection1Bg2 from "@/assets/images/user/mainSection1Bg2.jpg";
import mainSection1Bg3 from "@/assets/images/user/mainSection1Bg3.jpg";
import mainSection1Bg4 from "@/assets/images/user/mainSection1Bg4.jpg";
import mainSection1Bg5 from "@/assets/images/user/mainSection1Bg5.jpg";
import mainSection1Bg6 from "@/assets/images/user/mainSection1Bg6.jpg";
import mainSection1Bg7 from "@/assets/images/user/mainSection1Bg7.jpg";
import mainSection1Bg8 from "@/assets/images/user/mainSection1Bg8.jpg";
import mainSection1Bg9 from "@/assets/images/user/mainSection1Bg9.jpg";
import mainSection1Icon1 from "@/assets/images/user/mainSection1Icon1.png";
import mainSection1Icon2 from "@/assets/images/user/mainSection1Icon2.png";
import mainSection1Img1 from "@/assets/images/user/mainSection1Img1.png";
import mainSection1Img2 from "@/assets/images/user/mainSection1Img2.png";
import mainSection1Img3 from "@/assets/images/user/mainSection1Img3.png";
import mainSection1Img4 from "@/assets/images/user/mainSection1Img4.png";
import mainSection1Img5 from "@/assets/images/user/mainSection1Img5.png";
import mainSection1Img6 from "@/assets/images/user/mainSection1Img6.png";
import mainSection1Img7 from "@/assets/images/user/mainSection1Img7.png";
import mainSection1Img8 from "@/assets/images/user/mainSection1Img8.png";
import mainSection1Img9 from "@/assets/images/user/mainSection1Img9.png";
import MoreButton from "@/components/user/button/MoreButton";

const list = [
    {
        url: "https://www.aphen.net/228",
        title: "교과서 대화",
        description: "동아시아 각국의 교과서를 분석하고, \n서술의 문제점을 고쳐나갑니다.",
        bg: mainSection1Bg1,
        img: mainSection1Img1,
    },
    {
        url: "https://www.aphen.net/228",
        title: "학술활동",
        description: "학술회의 콜로키움 정책포럼을 통해 \n학술적 대안을 찾습니다.",
        bg: mainSection1Bg2,
        img: mainSection1Img2,
    },
    {
        url: "https://www.aphen.net/228",
        title: "동아시아 \n공동교재편찬",
        description: "역사대화를 통해 \n공동의 역사인식을 추구합니다.",
        bg: mainSection1Bg3,
        img: mainSection1Img3,
    },
    {
        url: "https://www.aphen.net/228",
        title: "평화포럼",
        description: "역사인식과 동아시아 평화포럼을 통해 \n평화공존의 미래를 상상합니다.",
        bg: mainSection1Bg4,
        img: mainSection1Img4,
    },
    {
        url: "https://www.aphen.net/228",
        title: "청소년 역사체험캠프",
        description: "동아시아 청소년들이 서로를 이해하고 \n공감대를 만들어 갑니다.",
        bg: mainSection1Bg5,
        img: mainSection1Img5,
    },
    {
        url: "https://www.aphen.net/228",
        title: "한일공동수업",
        description: "한일 간 문화와 역사인식의 차이를 \n인식하고 서로 이해할 수 있도록 합니다.",
        bg: mainSection1Bg6,
        img: mainSection1Img6,
    },
    {
        url: "https://www.aphen.net/228",
        title: "시민강좌·평화기행",
        description: "시민과 함께 역사를 느낍니다.",
        bg: mainSection1Bg7,
        img: mainSection1Img7,
    },
    {
        url: "https://www.aphen.net/228",
        title: "국제연대와 \n네트워크",
        description: "세계인들과 함께\n보편적 가치를 추구합니다.",
        bg: mainSection1Bg8,
        img: mainSection1Img8,
    },
    {
        url: "https://www.aphen.net/228",
        title: "단행본 출간",
        description: "연구성과를 모아 단행본과\n총서를 출간합니다.",
        bg: mainSection1Bg9,
        img: mainSection1Img9,
    },
];

export default function MainSection1() {
    return (
        <div className="overflow-hidden">
            <div className="relative mx-auto flex max-w-[1360px] flex-col gap-[24px] p-[40px_20px_0] md:gap-[40px] md:p-[80px_28px_0] xl:flex-row xl:items-start xl:p-[120px_0_65px] min-[1400px]:px-0">
                <Image
                    src={mainSection1Icon1}
                    alt="배경"
                    width={300}
                    height={266}
                    className="absolute bottom-0 right-[28px] hidden md:block xl:-right-[240px] xl:bottom-auto xl:top-[50px]"
                />
                <Image
                    src={mainSection1Icon2}
                    alt="배경"
                    width={189}
                    height={344}
                    className="absolute bottom-0 right-[920px] hidden xl:block"
                />
                <div className="relative z-[1] flex items-end justify-between xl:flex-1 xl:flex-col xl:items-start xl:gap-[40px]">
                    <div>
                        <p className="font-[500] text-[#23AA4B] md:text-[18px]">Main Activities</p>
                        <p className="pt-[4px] text-[24px] font-[700] md:text-[40px]">주요활동</p>
                    </div>
                    <MoreButton />
                </div>
                <ul className="relative z-[1] grid w-full max-w-[1000px] grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
                    {list.map((item, i) => (
                        <li key={`main_section1_item_${i}`}>
                            <button
                                type="button"
                                className="group relative w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#FFFFFF] to-[#F8F8F8] py-[24px] md:rounded-[40px] md:py-[60px] xl:h-[440px]"
                            >
                                <div className="absolute left-0 top-0 hidden h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:block">
                                    <Image src={item.bg} alt="배경" fill className="object-cover" />
                                </div>
                                <div className="relative z-[1] flex flex-col items-center gap-[8px] md:gap-[40px]">
                                    <Image
                                        src={item.img}
                                        alt="아이콘"
                                        className="size-[100px] transition-opacity duration-200 md:size-[120px] xl:group-hover:opacity-0"
                                    />
                                    <div className="flex min-h-[140px] flex-col justify-center gap-[8px] transition-all duration-300 md:min-h-[160px] xl:group-hover:translate-y-[-50%] xl:group-hover:text-white">
                                        <p className="whitespace-pre-line text-[20px] font-[700] md:text-[32px]">
                                            {item.title}
                                        </p>
                                        <p className="whitespace-pre-line text-[#666] transition-all duration-300 md:text-[18px] xl:group-hover:text-white">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
