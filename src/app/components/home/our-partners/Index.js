import Image from 'next/image';

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/icons/filecoin.svg';
import Arweave from '../../../../../public/new-home-assets/icons/arweave.svg';
import AWS from '../../../../../public/new-home-assets/icons/aws.svg';
import Azure from '../../../../../public/new-home-assets/icons/azure.svg';
import Sia from '../../../../../public/new-home-assets/icons/sia.svg';
import Storj from '../../../../../public/new-home-assets/icons/storj.svg';
import Cloudskye from '../../../../../public/new-home-assets/ClearSky2.png';
import Bloczio from '../../../../../public/new-home-assets/icons/bloczio.svg';
import Marquee from "react-fast-marquee";

export const OurPartners = () => {
    // const scrollContainerRef = useRef(null);
    const partners = [
        { partnerName: 'Sia', partnerIcon: Sia, width: 80, height: 50 },
        { partnerName: 'Arweave', partnerIcon: Arweave, width: 146, height: 50 },
        { partnerName: 'Storj', partnerIcon: Storj, width: 103, height: 50 },
        { partnerName: 'AWS', partnerIcon: AWS, width: 41, height: 50 },
        { partnerName: 'Azure', partnerIcon: Azure, width: 100, height: 50 },
        { partnerName: 'Cloudskye', partnerIcon: Cloudskye, width: 120, height: 50 },
        { partnerName: 'Bloczio', partnerIcon: Bloczio, width: 120, height: 50 },
        { partnerName: 'FileCoin', partnerIcon: FileCoin, width: 120, height: 50 },
    ];

    // useEffect(() => {
    //     const partnersContainer = scrollContainerRef.current;
    //     const items = partnersContainer.children;

    //     // Calculate the width of the container dynamically based on the children
    //     let totalWidth = 0;
    //     Array.from(items).forEach(item => {
    //         totalWidth += item.offsetWidth;
    //     });

    //     const scrollerContent = Array.from(partnersContainer.children);

    //     scrollerContent.forEach((item) => {
    //         const duplicateElement = item.cloneNode(true);
    //         partnersContainer.appendChild(duplicateElement)
    //     });

    //     // Set up a GSAP infinite scroll (marquee-like animation)
    //     gsap.to(partnersContainer, {
    //         x: -totalWidth, // Move left by the total width of all items
    //         duration: 50, // Adjust speed (higher duration = slower)
    //         ease: 'linear',
    //         repeat: -1, // Infinite loop
    //         modifiers: {
    //             x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth) // This will reset the position when scrolling ends
    //         }
    //     });
    // }, [partners]);

    return (
        <section className="2xl:px-10 md:px-5 px-0 2xl:py-16 py-12">
            <div className="lg:grid grid-cols-12 justify-center items-center">
                <div className="xl:col-span-2 lg:col-span-3 lg:mb-0 md:mb-10 mb-5">
                    <h4 className="bg-green capitalize text-black xl:text-2xl md:text-xl text-lg xl:leading-5 md:leading-4 leading-4 inline px-0.2">
                        // Our partners:
                    </h4>
                </div>
                <div className="xl:col-span-10 lg:col-span-9 overflow-hidden lg:pt-0 pt-5">
                    <Marquee autoFill={true}>
                        {partners.map((partner, index) => (
                            <Image
                                key={index}
                                src={partner.partnerIcon}
                                alt={`${partner.partnerName} icon`}
                                width={partner.width}
                                height={partner.height}
                                loading="lazy"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};
