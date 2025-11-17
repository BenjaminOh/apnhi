import Image from "next/image";

import aboutBg from "@/assets/images/user/aboutBg.jpg";
import aboutIcon1 from "@/assets/images/user/aboutIcon1.png";
import aboutIcon2 from "@/assets/images/user/aboutIcon2.png";
import aboutIcon3 from "@/assets/images/user/aboutIcon3.png";
import aboutIcon4 from "@/assets/images/user/aboutIcon4.png";
import aboutIcon5 from "@/assets/images/user/aboutIcon5.png";
import aboutIcon6 from "@/assets/images/user/aboutIcon6.png";
import aboutIcon7 from "@/assets/images/user/aboutIcon7.png";
import aboutIcon8 from "@/assets/images/user/aboutIcon8.png";
import aboutIcon9 from "@/assets/images/user/aboutIcon9.png";
import subBannerGreeting from "@/assets/images/user/subBannerGreeting.jpg";
import SubBanner from "@/components/user/sub/-components/SubBanner";

export default function Greeting() {
    return (
        <>
            <SubBanner banner={subBannerGreeting} title={`아시아평화와 <br/>역사연구소는`} />
            <div className="p-[40px_20px_120px] md:p-[60px_28px_160px] xl:pt-[80px]">
                <div className="mx-auto max-w-[1360px] xl:flex xl:justify-end xl:pl-[560px]">
                    <div className="xl:w-[680px]">
                        <div className="text-[18px] leading-[1.5] text-[#666] md:text-[20px]">
                            국내외 교과서의 역사왜곡을 바로잡고, 20세기 침략과 저항의 역사에 대한 아시아 공동의
                            역사인식을 마련하고, 나아가 후세에 대한 올바른 교육을 위한 연구를 바탕으로 21세기 세계의
                            화해와 평화에 기여함을 목적으로 설립되었습니다.
                            <br />
                            <br />
                            우리 연구소는 국내외 역사 갈등의 주요 요소인 역사교재의 문제점들을 분석하고 다양한 대안을
                            모색하는 활동을 주요 업무로 삼고 있습니다. 구체적으로 한중일의 연구자, 교사가 참여하는
                            공동부교재 작성 사업을 진행하고 있습니다. 또 한중일 연구자, 교사, 시민활동가 등이 매년 3국을
                            순회하며 ‘역사인식과 동아시아 평화포럼’을 개최하고 동북아시아의 주요 역사 갈등 요인인 일본의
                            전쟁범죄와 식민지범죄와 청산 작업의 현황을 점검하면서 세계사적인 보편성 획득을 위한 활동을
                            전개하고 있습니다. 나아가 미래의 동아시아를 이끌어 갈 청소년들을 대상으로
                            청소년역사체험캠프를 진행해 미래의 갈등 요소에 선제적으로 대응하는 활동을 전개하고 있습니다.
                        </div>
                    </div>
                </div>
                <div className="p-[80px_20px_20px] md:p-[120px_28px_40px] md:text-center">
                    <p className="text-[32px] font-[700] md:text-[40px]">목적 및 주요사업</p>
                    <p className="pt-[12px] text-[18px] text-[#666] md:pt-[20px] md:text-[20px]">
                        국내외 교과서의 역사왜곡을 바로잡고, <br className="xl:hidden" />
                        20세기 침략과 저항의 역사에 대한 아시아 공동의 역사인식을 마련하고, <br />
                        나아가 후세에 대한 올바른 교육을 위한 연구를 바탕으로 21세기 세계의 화해와 평화에 기여함을
                        목적으로 한다.
                    </p>
                </div>
                <div className="relative mx-auto max-w-[1720px] p-[40px_20px] md:py-[85px] xl:py-[100px]">
                    <Image src={aboutBg} alt="이미지" fill className="object-cover" />
                    <ul className="relative list-decimal pl-[20px] text-[18px] font-[500] text-white md:flex md:flex-col md:items-center md:pl-0 md:text-[20px]">
                        <li>일본과 중국의 역사왜곡을 바로잡기 위한 연구․교육활동 및 심포지엄</li>
                        <li>한중일 역사학자, 시민단체 간 교류 및 네트워크 구축사업</li>
                        <li>일본과 중국의 역사왜곡과 관련하여 홍보물 발간 및 온라인을 통한 무상 정보제공사업</li>
                    </ul>
                </div>
                <ul className="mx-auto flex max-w-[1720px] flex-wrap gap-y-[24px] p-[40px_20px_0] md:justify-center md:gap-y-[40px] md:p-[80px_28px_0] xl:flex-nowrap xl:p-[100px_0_0]">
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon1} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            일본 역사왜곡 <br />
                            대응 활동
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon2} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            중국 역사왜곡 <br />
                            대응 활동
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon3} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            한국사 교과서 <br />
                            개정 및 정상화 활동
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon4} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            역사인식과 <br />
                            동아시아 평화포럼
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon5} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            일본의 과거청산 <br />
                            촉구와 평화 만들기
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon6} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            한중일 역사공동교재 <br />
                            개발 활동
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon7} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">
                            동아시아 청소년 <br />
                            역사체험캠프
                        </p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon8} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">교육활동</p>
                    </li>
                    <li className="flex w-1/2 flex-col items-center gap-[12px] md:w-1/4 xl:flex-1">
                        <Image src={aboutIcon9} alt="아이콘" />
                        <p className="text-center text-[20px] font-[500]">평화기행</p>
                    </li>
                </ul>
            </div>
        </>
    );
}
