import MoreButton from "@/components/user/button/MoreButton";

export default function MainSection2() {
    return (
        <div className="relative mx-auto max-w-[1360px] px-[20px] md:px-[28px] min-[1400px]:px-0">
            <div className="flex items-end justify-between">
                <div>
                    <p className="font-[500] text-[#23AA4B] md:text-[18px]">Notice</p>
                    <p className="pt-[4px] text-[24px] font-[700] md:text-[40px]">공지사항</p>
                </div>
                <MoreButton />
            </div>
        </div>
    );
}
