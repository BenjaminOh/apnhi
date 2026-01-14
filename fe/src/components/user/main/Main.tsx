import UserPopup from "../popup/UserPopup";
import MainBanner from "./-components/MainBanner";
import MainSection1 from "./-components/MainSection1";
import MainSection2 from "./-components/MainSection2";
import MainSection3 from "./-components/MainSection3";

export default function Main() {
    return (
        <>
            <MainBanner />
            <MainSection1 />
            <MainSection2 />
            <MainSection3 />
            <UserPopup />
        </>
    );
}
