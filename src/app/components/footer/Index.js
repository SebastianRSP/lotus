import Image from 'next/image';
import footerLogo from '../../../../public/footer-logo.png';
import Link from 'next/link';
import { LinkToGo } from '../shared-components/LinkToGo';

const sociaLinks = [
    {socialLinkName: 'Telegram', socialLinkAddress: '#', socialLinkIcon: ''},
    {socialLinkName: 'Medium', socialLinkAddress: '#', socialLinkIcon: ''},
    {socialLinkName: 'Instagram', socialLinkAddress: '#', socialLinkIcon: ''},
]

const footerMenu1 = [
    {linkName: 'Home', goTo: '#'},
    {linkName: 'The Bridge', goTo: '#'},
    {linkName: 'How It Work', goTo: '#'},
    {linkName: 'Al Tool', goTo: '#'},
    {linkName: 'Partners', goTo: '#'},
    {linkName: 'FAQs', goTo: '#'},
]
const footerMenu2 = [
    {linkName: 'About', goTo: '#'},
    {linkName: 'Lorem Ipem', goTo: '#'},
    {linkName: 'Lorem Ipem', goTo: '#'},
    {linkName: 'Lorem Ipem', goTo: '#'},
]

export const Footer = () => {
    return (
        <>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-full relative">
                <div className="xl:px-32 lg:px-20 md:px-9 px-7 xl:py-44 py-14 flex flex-col md:gap-16 gap-8 ">
                    <div className="w-full h-auto">
                        <Image
                            src={footerLogo}
                            className='lg:w-10/12 md:w-8/12 w-6/12'
                            alt='footer logo'
                            width={240}
                            height={38}
                        />
                    </div>
                    <p className='text-xs font-normal leading-4 w-full'>
                        The Bridge streamlines the migration from
                        traditional Web2 data storage systems like AWS and
                        Google Cloud to cutting-edge Web3 platforms such as Filecoin,
                        SIA, and Arweave. Our advanced AI-driven analytics tools enhance
                        data understanding and utilization for enterprises.
                    </p>
                    <div className='flex flex-col gap-1'>
                        {sociaLinks.map((sociaLink, index) => (
                            <Link className='md:text-2xl text-xl font-light leading-32' href={sociaLink.socialLinkAddress} key={index}>
                                {sociaLink.socialLinkName}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='md:border-x md:border-y-0 border-y border-light-gray xl:py-44 py-7 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu1.map((footerLink, index) => (
                                <Link className='md:text-2xl text-xl uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='md:border-x md:border-y-0 border-y border-light-gray xl:py-44 py-7 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu2.map((footerLink, index) => (
                                <Link className='md:text-2xl text-xl uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='xl:px-40 lg:px-20 md:px-9 px-7 xl:py-44 py-14'></div>
            </div>
            <div className='w-full relative bottom-10 flex justify-between xl:px-40 lg:px-20 md:px-9 px-7 '>
                <LinkToGo
                    linkText={'TERMS & CONDITIONS'}
                    href={'#'}
                    icon={false}
                    extras={'md:!font-bold font-normal md:text-lg text-xs'}
                />
                <LinkToGo
                    linkText={'NEWSLETTER'}
                    href={'#'}
                    icon={false}
                    extras={'md:!font-bold font-normal md:text-lg text-xs'}
                />
                <LinkToGo
                    linkText={'LEGAL'}
                    href={'#'}
                    icon={false}
                    extras={'md:!font-bold font-normal md:text-lg text-xs'}
                />
            </div>
        </>
    )
}