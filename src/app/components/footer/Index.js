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
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-full relative text-black">
                <div className="px-5 py-8 flex flex-col md:gap-8 gap-8 ">
                    <div className="w-full h-auto">
                        <Image
                            src={footerLogo}
                            className=''
                            alt='footer logo'
                            width={120}
                            height={19}
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
                            <Link className='text-s font-normal hover:font-bold leading-32' href={sociaLink.socialLinkAddress} key={index}>
                                {sociaLink.socialLinkName}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='md:border-x md:border-y-0 border-y border-light-gray py-8 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu1.map((footerLink, index) => (
                                <Link className='text-s uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='md:border-x md:border-y-0 border-y border-light-gray py-8 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu2.map((footerLink, index) => (
                                <Link className='text-s uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='px-5 xl:py-8 py-8'>
                <LinkToGo
                    linkText={'TERMS & CONDITIONS'}
                    href={'#'}
                    icon={false}
                    extras={'text-s uppercase font-normal hover:font-bold leading-32'}
                />
                <LinkToGo
                    linkText={'NEWSLETTER'}
                    href={'#'}
                    icon={false}
                    extras={'text-s uppercase font-normal hover:font-bold leading-32'}
                />
                <LinkToGo
                    linkText={'LEGAL'}
                    href={'#'}
                    icon={false}
                    extras={'text-s uppercase font-normal hover:font-bold leading-32'}
                />
                </div>
            </div>
            <div className='w-full relative bottom-10 flex justify-between xl:px-40 lg:px-20 md:px-9 px-7 text-black'>

            </div>
        </>
    )
}