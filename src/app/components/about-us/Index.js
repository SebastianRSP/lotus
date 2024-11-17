import { HeroBackground } from "../shared-components/HeroBackground";
import { BlackStrap } from "../white-strap-navbar/BlackStrap";
import { AboutUsHeroSection } from "./hero-section/Index";


export const IndexAboutUs = () => {

    return (
        <>
            <HeroBackground bgColor={'bg-black'}>
                <BlackStrap />
                <div className="h-full w-full">
                    <AboutUsHeroSection />
                </div>
            </HeroBackground>
        </>
    )
}