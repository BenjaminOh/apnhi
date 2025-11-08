import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import history2001 from "@/assets/images/user/history2001.jpg";
import history2002 from "@/assets/images/user/history2002.jpg";
import history2003 from "@/assets/images/user/history2003.jpg";
import history2004 from "@/assets/images/user/history2004.jpg";
import history2005 from "@/assets/images/user/history2005.jpg";
import history2006 from "@/assets/images/user/history2006.jpg";
import history2007 from "@/assets/images/user/history2007.jpg";
import history2008 from "@/assets/images/user/history2008.jpg";
import history2009 from "@/assets/images/user/history2009.jpg";
import history2010 from "@/assets/images/user/history2010.jpg";
import history2011 from "@/assets/images/user/history2011.jpg";
import history2012 from "@/assets/images/user/history2012.jpg";
import history2013 from "@/assets/images/user/history2013.jpg";
import history2014 from "@/assets/images/user/history2014.jpg";
import history2015 from "@/assets/images/user/history2015.jpg";
import history2016 from "@/assets/images/user/history2016.jpg";
import history2017 from "@/assets/images/user/history2017.jpg";
import history2018 from "@/assets/images/user/history2018.jpg";
import history2019 from "@/assets/images/user/history2019.jpg";
import history2020 from "@/assets/images/user/history2020.jpg";
import history2021 from "@/assets/images/user/history2021.jpg";
import history2022 from "@/assets/images/user/history2022.jpg";
import history2023 from "@/assets/images/user/history2023.jpg";
import history2024 from "@/assets/images/user/history2024.jpg";
import history2025 from "@/assets/images/user/history2025.jpg";
import subBannerHistory from "@/assets/images/user/subBannerHistory.jpg";
import subBannerLogo from "@/assets/images/user/subBannerLogo.png";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface HistoryListItem {
    date: string;
    text: string;
}

interface HistoryItem {
    year: string;
    img: StaticImageData;
    list: HistoryListItem[];
}

interface Item {
    title: string;
    id: string;
    history: HistoryItem[];
}

const items: Item[] = [
    {
        title: "2025 ~ 2021",
        id: "content1",
        history: [
            {
                year: "2025",
                img: history2025,
                list: [
                    { date: `03. 25`, text: `일본 고등학교 역사왜곡 교과서 검정 통과 결과 분석 보도자료 배포` },
                    { date: `04. 25`, text: `2025년 아시아평화와역사연구소 학술회의: 시민적 역사 인식의 방향 모색` },
                    { date: `08. 04 ~ 08. 08`, text: `제22회 동아시아 청소년 역사체험캠프(한국 경기, 서울)` },
                    {
                        date: `08. 11`,
                        text: `『평화를 여는 역사』 출판(3단계 편찬위원회/아시아평화와역사교육연대 한중일공동역사교재위원회)`,
                    },
                    { date: `11. 01 ~ 11. 03`, text: `제23회 역사인식과 동아시아 평화포럼 마츠모토 대회(일본 나가노)` },
                    { date: `11. 27`, text: `사무실 이전(서교동)` },
                ],
            },
            {
                year: "2024",
                img: history2024,
                list: [
                    {
                        date: `03. 15`,
                        text: `신진 연구자 역사대화 국제학술회의 "‘시선’, 과거사 기억의 세대적 인식과 공유를 위한 역사대화"`,
                    },
                    { date: `03. 22`, text: `2024 일본 중등 교과서 검정 결과 분석 발표 기자회견` },
                    { date: `03. 25`, text: `검정 결과에 항의하는 주한 일본대사관 앞 기자회견` },
                    { date: `04. 12`, text: `2024년 아시아평화와역사연구소 학술회의 "역사대화의 성과와 새로운 모색"` },
                    { date: `05. 10`, text: `2024 제2회 정책포럼 "화해학의 도달점"` },
                    { date: `06. 08`, text: `2024년 공동 학술 세미나 "다문화 시대 한국과 미국의 역사교육"` },
                    {
                        date: `06. 12`,
                        text: `2024 제3회 정책포럼 "중국대학 필수교재 ‘중화민족공동체개론’ 출간 현황과 함의"`,
                    },
                    { date: `06. 14`, text: `공동 수업 진행(후쿠오카대학/오카타 요시히로, 한혜인)` },
                    { date: `06. 17`, text: `공동 수업 진행(오이타대학/정경아, 이신철)` },
                    { date: `06. 27`, text: `공동 수업 진행(독일 베를린자유대학/임성숙)` },
                    { date: `08. 04 ~ 08. 08`, text: `제21회 동아시아 청소년 역사체험캠프(일본 교토)` },
                    { date: `08. 11`, text: `『한일 교과서 역사 쟁점 집필 권고안』 제작을 위한 간담회` },
                    { date: `08. 12 ~ 08. 13`, text: `제4회 역사 인식과 교육 교류회` },
                    { date: `11. 01 ~ 11. 05`, text: `제22회 역사인식과 동아시아 평화포럼 창사대회(중국 창사)` },
                    { date: `11. 02 ~ 11. 04`, text: `한중일 3국 공동 역사 교재 편찬위원회 전체회의(중국 창사)` },
                ],
            },
            {
                year: "2023",
                img: history2023,
                list: [
                    { date: `03. 17`, text: `2023 제1회 정책포럼: “한중청년세대의 갈등 원인 진단과 미래 전망”` },
                    { date: `04. 17`, text: `2023 제2회 정책포럼: “화해의 국제정치: 전환기 정의와 한일관계”` },
                    {
                        date: `05. 16`,
                        text: `2023 제3회 정책포럼: “동남아시아 역사갈등의 여러 단계 - 인도네시아 근현대사를 중심으로”`,
                    },
                    { date: `05. 19`, text: `제2회 콜로키움: "기지 국가의 탄생: 일본이 치른 한국전쟁"` },
                    { date: `06. 01`, text: `북한 핵개발 프로그램의 평화적 기원` },
                    { date: `06. 09`, text: `제국주의 연대, 강제동원 피해자를 집어삼키다` },
                    { date: `06. 19`, text: `공동 수업 진행(오이타대학/정경아, 정진아)` },
                    { date: `06. 21`, text: `공동 수업 진행(후쿠오카대학/오카타 요시히로, 이신철)` },
                    { date: `06. 22`, text: `공동 수업 진행(후쿠오카사범대학/고바야시 토모교, 한혜인)` },
                    { date: `08. 31 ~ 09. 03`, text: `한일 시민 간담회(일본 도쿄)` },
                    {
                        date: `09. 02`,
                        text: `2023년 소학교 교과서 검정 결과 및 2024년 중학교 검정 대비 간담회(어린이와교과서네트전국21)`,
                    },
                    { date: `10. 25`, text: `역사 인식 수업 진행(TLBU 글로벌학교)` },
                    { date: `11. 03`, text: `역사 인식과 역사 교육 교류회` },
                    { date: `11. 04 ~ 11. 06`, text: `제21회 역사인식과 동아시아 평화포럼 부산대회(한국 부산)` },
                    { date: `11. 05 ~ 11. 06`, text: `한중일 3국 공동 역사 교재 편찬위원회 전체회의(한국 부산)` },
                ],
            },
            {
                year: "2022",
                img: history2022,
                list: [
                    { date: `03. 29`, text: `2022 일본 고등학교 교과서 선택 과목 검정 결과 분석발표 기자회견` },
                    {
                        date: `03. 30`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 강제동원 문제, 일본은 무엇을 부정하는가?`,
                    },
                    {
                        date: `04. 13`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 일본제국의 전시 동원: 가해와 피해의 중층 구조`,
                    },
                    {
                        date: `04. 27`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 강제연행과 강제동원 사이: 식민지 조선의 전시 동원`,
                    },
                    {
                        date: `05. 04`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 중국공산당 100년 중화인민공화국 100년의 꿈`,
                    },
                    {
                        date: `05. 11`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 중국 개혁 개방 40년 중국 경제의 빛과 그림자`,
                    },
                    { date: `05. 18`, text: `시민과 함께 하는 역사와 평화 강좌: 중국의 넘쳐나는 애국주의의 그늘` },
                    { date: `05. 25`, text: `시민과 함께 하는 역사와 평화 강좌: 한중 수교 30년, 역사 문화 갈등 20년` },
                    {
                        date: `06. 08`,
                        text: `시민과 함께 하는 역사와 평화 강좌: 기숙사와 하숙집이 그려낸 북촌의 독립운동`,
                    },
                    { date: `06. 15`, text: `시민과 함께 하는 역사와 평화 강좌: 1970년대 기생 관광과 익선동` },
                    { date: `06. 22`, text: `시민과 함께 하는 역사와 평화 강좌: 1968년 김신조와 서울` },
                    { date: `06. 29`, text: `시민과 함께 하는 역사와 평화 강좌: 해방과 분단, 근로 인민 되기` },
                    { date: `07. 06`, text: `시민과 함께 하는 역사와 평화 강좌: 한국전쟁과 신세대 노동자의 등장` },
                    { date: `07. 13`, text: `시민과 함께 하는 역사와 평화 강좌: 자력갱생 경제와 노동자의 역할` },
                    { date: `07. 20`, text: `시민과 함께 하는 역사와 평화 강좌: ‘공장사회’의 탄생` },
                    { date: `08. 14`, text: `공동 수업: 여성은 인권을 가지고 있는가?` },
                    { date: `09. 24`, text: `한일 시민 간담회(천안)` },
                    { date: `09. 28`, text: `일본 고등학교 역사 교과서 '역사 종합' 무엇이 문제인가` },
                    { date: `10. 24`, text: `공동 수업: 한일 역사 논쟁과 독도 문제` },
                    {
                        date: `10. 26`,
                        text: `공동 수업: 한일 역사 인식 차이는 왜 생기는가: 일본군 '위안부' 문제와 구 징용공 소송을 중심으로`,
                    },
                    { date: `10. 26`, text: `생태 환경사의 시각에서 본 한국 고대의 신화` },
                    { date: `11. 11`, text: `한일 시민 간담회(일본)` },
                    { date: `11. 12 ~ 11. 13`, text: `제20회 역사인식과 동아시아 평화포럼(일본 온라인)` },
                    { date: `11. 15`, text: `공동 수업: 한국과 일본의 시위 문화와 청년, 재일조선인과 혐오 범죄` },
                    { date: `11. 30`, text: `교육과정 개편과 동아시아사` },
                    { date: `12. 17`, text: `동아시아 역사교육 교류 프로그램 - 평화와 공존을 위한 동아시아 역사 대화` },
                ],
            },
            {
                year: "2021",
                img: history2021,
                list: [
                    { date: `03. 30`, text: `일본 교과서 검정 결과 관련 기자회견` },
                    { date: `03. 31`, text: `일본 고등학교 교과서 분석 전문가 세미나(동북아재단 공동 긴급 간담회)` },
                    { date: `04. 05`, text: `램지어 관련 한중일 기자회견` },
                    { date: `04. 30`, text: `일본 교과서 일본 고등학교 역사 총합 교과서 분석 회의` },
                    { date: `06. 12`, text: `일본 교과서 학술회의` },
                    { date: `08. 03 ~ 08. 05`, text: `제19회 동아시아 청소년 역사체험캠프(한국 온라인)` },
                    { date: `10. 20`, text: `춘천교육대학교 공동 수업(야마구치 다케시)` },
                    { date: `10. 21`, text: `류큐대학교 공동 수업(박삼헌)` },
                    { date: `10. 22`, text: `류큐대학교 공동 수업(김정인)` },
                    { date: `10. 26`, text: `건국대학교 공동 수업(야마구치 타케시)` },
                    { date: `10. 27`, text: `훗카이도대학교 공동 수업(이신철)` },
                    { date: `10. 29`, text: `교토국제고등학교 & 용인보라고등학교(이경훈, 김일혜) 공동 수업` },
                    { date: `11. 06 ~ 11. 07`, text: `한일 시민단체 간담회(목포)` },
                    { date: `11. 13 ~ 11. 14`, text: `제19회 역사인식과 동아시아 평화포럼(중국, 온라인)` },
                ],
            },
        ],
    },
    {
        title: "2020 ~ 2016",
        id: "content2",
        history: [
            {
                year: "2020",
                img: history2020,
                list: [
                    { date: `01. 12 ~ 01. 13`, text: `제51차 한중일3국공동역사교재편찬위원회 국제회의(한국 서울)` },
                    { date: `02. 11`, text: `포럼 평화·인권·환경 심포지엄` },
                    {
                        date: `08. 15 ~ 08. 16`,
                        text: `아시아평화와역사교육연대·인문사회연구소 워크샵 : 역사교과서에 "평화" 어떻게 기술할 것인가`,
                    },
                    { date: `10. 16`, text: `류큐대학교 공동수업` },
                    {
                        date: `10. 23 ~ 10. 25`,
                        text: `한일시민간담회: 코로나 시대의 한일 역사대화 어떻게 나아가야 할까?`,
                    },
                    { date: `10. 26`, text: `오사카대학교 공동수업` },
                    { date: `10. 28`, text: `덕성여자고등학교 공동수업` },
                    { date: `10. 29`, text: `일산동고등학교 공동수업` },
                    { date: `11. 03`, text: `게이센여자대학원 공동수업` },
                    { date: `11. 06`, text: `훗카이도대학교 공동수업` },
                    { date: `11. 12`, text: `일산동고등학교 공동수업` },
                    { date: `11. 24`, text: `한강중학교 공동수업` },
                    {
                        date: `11. 26`,
                        text: `역사정책포럼: 중국고등학교 『중외역사강요』(하) 교과서의 역사인식과 한국`,
                    },
                    { date: `11. 27`, text: `2020년 검정 일본교과서 심포지엄` },
                    {
                        date: `11. 28 ~ 11. 29`,
                        text: `한일교사학생교류 간담회: 코로나시대, 대일 과거사교육과 한일교사·학생교류 어떻게 해야 할까?`,
                    },
                ],
            },
            {
                year: "2019",
                img: history2019,
                list: [
                    { date: `03. 09 ~ 03. 10`, text: `제48회 한중일3국공동역사교재편찬위원회 국제회의(중국 베이징)` },
                    { date: `07. 20 ~ 07. 21`, text: `제49회 한중일3국공동역사교재편찬위원회 국제회의(일본 도쿄)` },
                    {
                        date: `08. 07 ~ 08. 12`,
                        text: `제18회 동아시아 청소년 역사체험캠프(일본 도쿄) “동아시아의 화해와 핵 없는 세계로의 길”`,
                    },
                    { date: `11. 01 ~ 11. 05`, text: `제18회 역사인식과 동아시아 평화포럼 서울대회(한국 서울)` },
                    { date: `11. 03 ~ 11. 05`, text: `제50회 한중일3국공동역사교재편찬위원회 국제회의(한국 서울)` },
                    { date: `11. 26`, text: `중국 중학교 역사교과서 분석 심포지엄` },
                ],
            },
            {
                year: "2018",
                img: history2018,
                list: [
                    { date: `01. 08 ~ 01. 22`, text: `과거와 전쟁을 기억하는 방식을 찾아가는 길(동유럽 답사)` },
                    { date: `01. 20 ~ 01. 21`, text: `제45회 한중일3국공동역사교재편찬위원회 국제회의(중국 베이징)` },
                    { date: `06. 29 ~ 07. 02`, text: `제46회 한중일3국공동역사교재편찬위원회 국제회의(한국 춘천)` },
                    { date: `07. 28 ~ 08. 02`, text: `제17회 동아시아 청소년 역사체험캠프(중국 장춘)` },
                    { date: `10. 20`, text: `전국역사학대회 『지역의 역사 갈등과 역사정체성 만들기』` },
                    { date: `11. 10`, text: `중국 중학교 교과서 분석 심포지엄` },
                    {
                        date: `11. 23 ~ 11. 26`,
                        text: `제17회 역사인식과 동아시아 평화포럼 히로시마대회(일본 히로시마)`,
                    },
                    { date: `11. 24, 11. 26`, text: `제47회 한중일3국공동역사교재편찬위원회 국제회의(일본 히로시마)` },
                ],
            },
            {
                year: "2017",
                img: history2017,
                list: [
                    { date: `03. 24`, text: `2017년도 일본 고등학교 검정통과 교과서 분석 기자회견` },
                    { date: `04. 07`, text: `역사정책토론회 개최` },
                    { date: `04. 15 ~ 04. 16`, text: `제42회 한중일3국공동역사교재편찬위원회 국제회의(중국 베이징)` },
                    { date: `07. 24 ~ 07. 29`, text: `제16회 동아시아 청소년 역사체험캠프(한국 서울)` },
                    { date: `07. 29 ~ 07. 30`, text: `제43회 한중일3국공동역사교재편찬위원회 국제회의(한국 서울)` },
                    { date: `09. 07 ~ 09. 11`, text: `제16회 역사인식과 동아시아 평화포럼 난징대회(중국 난징)` },
                    { date: `09. 11 ~ 09. 12`, text: `제44회 한중일3국공동역사교재편찬위원회 국제회의(중국 난징)` },
                ],
            },
            {
                year: "2016",
                img: history2016,
                list: [
                    { date: `07. 02`, text: `제40회 한중일3국공동역사교재편찬위원회 국제회의(중국 항주)` },
                    { date: `07. 14`, text: `일본 고등학교 교과서 분석 토론회(경주이씨중앙화수회관)` },
                    { date: `07. 28 ~ 08. 02`, text: `제15회 동아시아 청소년 역사체험캠프(일본 홋카이도)` },
                    { date: `08. 13`, text: `평택-에히메 시민교류회 제8회 한일 역사 심포지엄` },
                    {
                        date: `10. 20 ~ 10. 23`,
                        text: `제15회 역사인식과 동아시아 평화포럼 제주대회(한국 제주), 공동교재 국제심포지엄(제주4·3평화교육센터)`,
                    },
                    { date: `10. 23`, text: `제41회 한중일3국공동역사교재편찬위원회 국제회의(한국 제주)` },
                ],
            },
        ],
    },
    {
        title: "2015 ~ 2011",
        id: "content3",
        history: [
            {
                year: "2015",
                img: history2015,
                list: [],
            },
            {
                year: "2014",
                img: history2014,
                list: [],
            },
            {
                year: "2013",
                img: history2013,
                list: [],
            },
            {
                year: "2012",
                img: history2012,
                list: [],
            },
            {
                year: "2011",
                img: history2011,
                list: [],
            },
        ],
    },
    {
        title: "2010 ~ 2006",
        id: "content4",
        history: [
            {
                year: "2010",
                img: history2010,
                list: [],
            },
            {
                year: "2009",
                img: history2009,
                list: [],
            },
            {
                year: "2008",
                img: history2008,
                list: [],
            },
            {
                year: "2007",
                img: history2007,
                list: [],
            },
            {
                year: "2006",
                img: history2006,
                list: [],
            },
        ],
    },
    {
        title: "2005 ~ 2001",
        id: "content5",
        history: [
            {
                year: "2005",
                img: history2005,
                list: [],
            },
            {
                year: "2004",
                img: history2004,
                list: [],
            },
            {
                year: "2003",
                img: history2003,
                list: [],
            },
            {
                year: "2002",
                img: history2002,
                list: [],
            },
            {
                year: "2001",
                img: history2001,
                list: [],
            },
        ],
    },
];

export default function History() {
    const [activeId, setActiveId] = useState(items[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // sticky 헤더 높이 + 여유

            // 각 섹션의 위치 확인
            for (let i = items.length - 1; i >= 0; i--) {
                const element = document.getElementById(items[i].id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    if (scrollPosition >= offsetTop) {
                        setActiveId(items[i].id);
                        break;
                    }
                }
            }
        };

        // 초기 실행
        handleScroll();

        // 스크롤 이벤트 리스너
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="relative xl:pt-[200px]">
                <div className="relative h-[160px] w-full md:h-[240px] xl:absolute xl:inset-0 xl:h-[400px]">
                    <Image src={subBannerHistory} alt="banner" fill className="object-cover" />
                </div>
                <div className="mx-auto max-w-[1360px] xl:flex xl:items-start xl:justify-between xl:pb-[160px]">
                    <div className="sticky top-[60px] z-[10] bg-[linear-gradient(316deg,#171E1D_6.2%,#206B6E_98.86%)] xl:min-h-[440px] xl:w-[320px] xl:rounded-[0_0_40px_0] xl:shadow-[8px_8px_20px_0_rgba(0,0,0,0.16)]">
                        <ScrollArea className="relative z-[1]">
                            <ul className="flex w-max gap-[20px] p-[8px_20px] md:gap-[24px] md:p-[16px_28px] xl:flex-col xl:gap-[20px] xl:p-[40px]">
                                {items.map((item, idx) => (
                                    <li key={`history_tab_${idx}`}>
                                        <Link
                                            href={`#${item.id}`}
                                            className={`relative font-[700] text-[#ddd] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:opacity-0 after:content-[''] ${
                                                activeId === item.id
                                                    ? "text-[20px] text-white after:opacity-100 md:text-[24px] xl:text-[32px]"
                                                    : "text-[18px] md:text-[20px] xl:text-[28px]"
                                            }`}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                        <div className="absolute bottom-0 right-0 hidden xl:block">
                            <Image src={subBannerLogo} alt="logo" width={213} height={236} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[60px] p-[40px_20px_80px] md:gap-[80px] md:p-[80px_28px_120px] xl:max-w-[1000px] xl:flex-1 xl:p-[0_28px] min-[1400px]:px-0">
                        {items.map((item, idx) => (
                            <div
                                key={`history_content_${idx}`}
                                id={item.id}
                                className={`flex scroll-mt-[140px] flex-col gap-[60px] md:gap-[80px] xl:scroll-mt-[100px]${
                                    idx === 0 ? " xl:pt-[280px]" : ""
                                }`}
                            >
                                {item.history.map((cont, i) => (
                                    <div
                                        key={`history_item_${i}`}
                                        className="flex flex-col gap-[24px] md:gap-[40px] xl:flex-row xl:items-start xl:justify-between"
                                    >
                                        <p className="font-gmarket text-[32px] font-[700] leading-[1.2] md:text-[48px]">
                                            {cont.year}
                                        </p>
                                        <div>
                                            <div className="overflow-hidden rounded-[8px]">
                                                <Image src={cont.img} alt="이미지" />
                                            </div>
                                            <div className="flex flex-col gap-[16px] pt-[28px]">
                                                {cont.list.map((list, j) => (
                                                    <div
                                                        key={`history_list_item_${j}`}
                                                        className="relative flex flex-col gap-[4px] pl-[16px] before:absolute before:left-0 before:top-[10px] before:size-[8px] before:rounded-full before:bg-[#23AA4B] md:flex-row md:gap-[16px] xl:pl-[24px]"
                                                    >
                                                        <p className="text-[18px] font-[700] md:min-w-[140px] md:text-[20px]">
                                                            {list.date}
                                                        </p>
                                                        <p
                                                            className="text-[18px] text-[#666] md:flex-1"
                                                            dangerouslySetInnerHTML={{ __html: list.text }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
