import telegram from '../../../../public/icons/telegram.svg';
import greenTelegram from '../../../../public/icons/green-telegram.svg';

const whitepaper = '/PDF/Whitepaper.pdf';
const litepaper = '/PDF/Litepaper.pdf';

export const navLinksBefore = [
    { navLinkName: 'HOME', navLink: '/', extras: `` },
    {
        navLinkName: 'DOCUMENTS',
        navLink: '#',
        extras: 'relative group',
        dropdown: [
            { name: 'Whitepaper', link: whitepaper },
            { name: 'Litepaper', link: litepaper },
        ],
    },
    { navLinkName: 'INVESTORS', navLink: '/investors', extras: `` }
];

export const navLinksAfter = [
    { navLinkName: 'About Us', navLink: '/about-us', extras: ``, bookDemo: false },
    { navLinkName: 'Connect with us', navLink: '#', extras: ``, bookDemo: true }
];

export const navIcons = [
    { navLinkName: '', navLink: '#', extras: 'p-5 border border-green', icon: true, iconImage: telegram, font: '' }
];

export const mobileNavIcons = [
    { navLinkName: '', navLink: '#', extras: 'p-5 border border-green', icon: true, iconImage: greenTelegram, font: '' },
    { navLinkName: 'M', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green font-serif' },
    { navLinkName: 'EN', navLink: '#', extras: 'p-6 border border-green', icon: false, iconImage: null, font: 'text-green ' }
];

export const mobileMenu = [
    { navLinkName: 'HOME', navLink: '/', extras: '' },
    { navLinkName: 'Whitepaper', navLink: whitepaper, extras: '', target: '_blank' },
    { navLinkName: 'Litepaper', navLink: litepaper, extras: '', target: '_blank' },
    { navLinkName: 'Investors', navLink: '/investors', extras: '' },
    { navLinkName: 'About Us', navLink: '/about-us', extras: '' },
    { navLinkName: 'Connect with us', navLink: '#', extras: '' }
];
