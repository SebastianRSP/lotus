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
        <footer className="bg-gray-light">
            <div className="grid grid-cols-3 mx-auto w-full ">
                <div className="flex flex-col gap-16 px-40 py-44">
                    <div className="w-full h-auto">
                        <Image
                            src={footerLogo}
                            alt='footer logo'
                            width={240}
                            height={38}
                        />
                    </div>
                    <p className='text-xs font-normal leading-4 w-4/6'>
                        The Bridge streamlines the migration from
                        traditional Web2 data storage systems like AWS and
                        Google Cloud to cutting-edge Web3 platforms such as Filecoin,
                        SIA, and Arweave. Our advanced AI-driven analytics tools enhance
                        data understanding and utilization for enterprises.
                    </p>
                    <div className='flex flex-col gap-1'>
                        {sociaLinks.map((sociaLink, index) => (
                            <Link className='text-2xl font-light leading-32' href={sociaLink.socialLinkAddress} key={index}>
                                {sociaLink.socialLinkName}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='border-x border-light-gray py-44 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu1.map((footerLink, index) => (
                                <Link className='text-2xl uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='border-x border-light-gray py-44 px-5'>
                        <div className='flex flex-col gap-1'>
                            {footerMenu2.map((footerLink, index) => (
                                <Link className='text-2xl uppercase font-normal hover:font-bold leading-32' href={footerLink.goTo} key={index}>
                                    {footerLink.linkName}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='px-40 py-44'></div>
            </div>
            <div className='relative -top-10 flex justify-between px-40 '>
                <LinkToGo
                    linkText={'TERMS & CONDITIONS'}
                    href={'#'}
                    icon={false}
                    extras={'!font-bold'}
                />
                <LinkToGo
                    linkText={'NEWSLETTER'}
                    href={'#'}
                    icon={false}
                    extras={'!font-bold'}
                />
                <LinkToGo
                    linkText={'LEGAL'}
                    href={'#'}
                    icon={false}
                    extras={'!font-bold'}
                />
            </div>
        </footer>
    )
}