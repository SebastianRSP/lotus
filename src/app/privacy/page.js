import { AboutUsFooter } from "../components/footer/about-us/Index";
import { PrivacyPolicy } from "../components/privacy-policy/Index";



export default function Home() {
    return (
        <>
            <div className="2xl:px-60 xl:px-10 lg:px-9 px-5">
            <PrivacyPolicy />
                <AboutUsFooter />
            </div>
        </>
    )
}