import Image from "next/image";

import book1Img1 from "@/assets/images/user/book1Img1.jpg";
import book1Img2 from "@/assets/images/user/book1Img2.jpg";
import book1Img3 from "@/assets/images/user/book1Img3.jpg";
import book2Img1 from "@/assets/images/user/book2Img1.jpg";
import book2Img2 from "@/assets/images/user/book2Img2.jpg";
import book2Img3 from "@/assets/images/user/book2Img3.jpg";
import book3Img1 from "@/assets/images/user/book3Img1.jpg";
import book4Img1 from "@/assets/images/user/book4Img1.jpg";
import book5Img1 from "@/assets/images/user/book5Img1.jpg";
import book6Img1 from "@/assets/images/user/book6Img1.jpg";
import book7Img1 from "@/assets/images/user/book7Img1.jpg";
import book7Img2 from "@/assets/images/user/book7Img2.jpg";
import book8Img1 from "@/assets/images/user/book8Img1.jpg";
import book9Img1 from "@/assets/images/user/book9Img1.jpg";
import icLogo from "@/assets/images/user/icLogo.png";

const list = [
    {
        books: [
            {
                img: book1Img1,
            },
            {
                img: book1Img2,
                url: "https://product.kyobobook.co.kr/detail/S000001306933",
            },
            {
                img: book1Img3,
            },
        ],
        title: "미래를 여는 역사",
        description: "한겨레출판사 \n2005. 05. 26 출판",
    },
    {
        books: [
            {
                img: book2Img1,
                url: "https://product.kyobobook.co.kr/detail/S000001306609",
            },
            {
                img: book2Img2,
                url: "http://kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788984312128&orderClick=LAG&Kc=",
            },
            {
                img: book2Img3,
                url: "http://kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788984312463&orderClick=LAG&Kc=",
            },
        ],
        title: "어린이의 미래를 여는 역사",
        description: "한겨레출판사 \n2007. 02. 01 출판",
    },
    {
        books: [
            {
                img: book3Img1,
                url: "https://product.kyobobook.co.kr/detail/S000000895649",
            },
        ],
        title: "동아시아에서 역사인식의 국경 넘기 \n(미래사총서1)",
        description: "선인 \n2005. 06. 25 출판",
    },
    {
        books: [
            {
                img: book4Img1,
                url: "https://product.kyobobook.co.kr/detail/S000000895650",
            },
        ],
        title: "역사인식을 둘러싼 자화상 외부의 시선 \n(미래사총서2)",
        description: "한겨레출판사 \n2008. 06. 25 출판",
    },
    {
        books: [
            {
                img: book5Img1,
                url: "http://kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788959331475&orderClick=LAG&Kc=",
            },
        ],
        title: "한중일 동아시아사 교육의 현황과 과제 \n(미래사총서3)",
        description: "선인 \n2008. 12. 31 출판",
    },
    {
        books: [
            {
                img: book6Img1,
            },
        ],
        title: "A history to open the future",
        description: "2010. 12. 31 출판",
    },
    {
        books: [
            {
                img: book7Img1,
                url: "https://product.kyobobook.co.kr/detail/S000000879695",
            },
            {
                img: book7Img2,
                url: "https://product.kyobobook.co.kr/detail/S000000879696",
            },
        ],
        title: "한중일이 함께 쓴 동아시아 근현대사",
        description: "휴머니스트\n2012. 05. 29 출판",
    },
    {
        books: [
            {
                img: book8Img1,
                url: "https://product.kyobobook.co.kr/detail/S000000896169",
            },
        ],
        title: "동아시아 평화공동체를 위한 영토인식과 역사기억\n(미래사총서4)",
        description: "선인 \n2015. 12. 30 출판",
    },
    {
        books: [
            {
                img: book9Img1,
            },
        ],
        title: "A New Modern History of East Asia",
        description: "V&R Unipress \n2017. 12. 04 출판",
    },
];

export default function Book() {
    return (
        <div className="p-[0_20px_120px] md:p-[0_28px_160px] xl:pt-[60px]">
            <div className="mx-auto max-w-[1360px]">
                <p className="hidden pb-[40px] text-center text-[18px] font-[500] text-[#666] xl:block">
                    ※ 책을 클릭하시면 자세한 사항을 확인하실 수 있습니다.
                </p>
                <ul className="flex flex-col gap-[60px] md:gap-[120px]">
                    {list.map((item, i) => (
                        <li key={`book_item_${i}`} className="flex flex-col gap-[20px] xl:flex-row xl:gap-[50px]">
                            <div className={`xl:w-[750px]${i % 2 === 0 ? "" : " xl:order-2"}`}>
                                <div className="flex justify-center gap-[8px] md:gap-[24px] xl:px-[21px]">
                                    {item.books.map((book, j) => (
                                        <div key={`book_img_${j}`} className="relative w-1/3">
                                            <Image src={book.img} alt="이미지" className="mx-auto" />
                                            {book.url && (
                                                <a
                                                    href={book.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 block h-full w-full"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="h-[16px] w-full bg-[#F2F3F8] shadow-[4px_4px_8px_0_rgba(0,0,0,0.2)] md:h-[24px]" />
                            </div>
                            <div
                                className={`rounded-[20px] bg-[#F3F9F5] p-[16px] text-center md:p-[24px] xl:flex xl:flex-1 xl:flex-col xl:justify-center${
                                    i % 2 === 0 ? "" : " xl:order-1"
                                }`}
                            >
                                <Image src={icLogo} alt="logo" width={27} height={24} className="mx-auto" />
                                <p className="whitespace-pre-line pt-[12px] text-[20px] font-[700] text-[#056547] md:text-[28px]">
                                    {item.title}
                                </p>
                                <p className="whitespace-pre-line pt-[8px] text-[18px] font-[500] text-[#666] md:pt-[16px] md:text-[20px]">
                                    {item.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
