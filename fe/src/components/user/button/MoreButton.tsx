import Image from "next/image";

import arrowRightBlack from "@/assets/images/user/arrowRightBlack.png";

export default function MoreButton() {
    return (
        <button type="button" className="flex h-[30px] items-start gap-[10px]">
            <p className="text-[20px] font-[700]">더보기</p>
            <Image src={arrowRightBlack} alt="더보기" width={24} height={24} className="mt-[2px]" />
        </button>
    );
}
