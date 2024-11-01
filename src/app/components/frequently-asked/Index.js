'use client'

import logo from '../../../../public/icons/logo.svg';
import arrowBottomRight from '../../../../public/icons/arrow-bottom-right.svg';
import arrowTopRight from '../../../../public/icons/arrow-top-right.svg';
import Image from "next/image";
import { LinkToGo } from '../shared-components/LinkToGo';
import { useState } from 'react';

const faqs = [
    {
        question: 'WHAT IS THE BRIDGE?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    },
    {
        question: 'WHO IS LOTUS DATA GROUP?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    },
    {
        question: 'WHAT PROBLEM ARE WE SOLVING?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    },
    {
        question: 'HOW DO WE SOLVE IT?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    },
    {
        question: 'WHAT IS THE ROADMAP?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    },
    {
        question: 'WILL THERE BE A TOKEN?',
        innderHeading: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOR?',
        innderDescription: 'SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM, TOTAM REM APERIAM, EAQUE IPSA QUAE AB ILLO INVENTORE VERITATIS ET QUASI ARCHITECTO BEATAE VITAE DICTA SUNT EXPLICABO. NEMO ENIM IPSAM VOLUPTATEM QUIA VOLUPTAS SIT ASPERNATUR AUT ODIT AUT FUGIT, SED QUIA CONSEQUUNTUR MAGNI DOLORES EOS QUI RATIONE VOLUPTATEM SEQUI NESCIUNT.'
    }
];

export const FrequentlyAsked = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleAccordion = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-black border-2 border-black forced-full-width">
            <div className="xl:px-40 md:px-9 px-7 md:pt-14 pt-7 lg:pb-44 md:pb-14 pb-7  bg-white  flex justify-between items-center border-2 border-black">
                <h4 className="lg:text-144 md:text-7xl text-3xl lg:font-medium font-bold leading-74 text-black">FAQs</h4>
                <Image
                    src={logo}
                    className='w-1/6'
                    alt="Logo"
                    width={69}
                    height={37}
                />
            </div>
            <div className='bg-white my-2'>
                {faqs.map((faq, index) => (
                    <div key={index} className="accordion-group">
                        <div className={`${openFAQ === index ? 'bg-black text-green border-b' : ''} accordion border-black divide-y`}>
                            <button
                                className="xl:pl-40 md:pl-9 pl-5 flex justify-between items-center w-full"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className={`${openFAQ === index ? 'text-green' : 'text-black'} border-black border-r md:text-30 text-2xl font-normal leading-8 w-full text-left py-5`}>
                                    <h5>{faq.question}</h5>
                                </div>
                                <div className='xl:pr-24 md:pr-9 pr-7 xl:pl-48 md:pl-9 pl-7 h-full'>
                                    <Image
                                        src={arrowBottomRight}
                                        alt='bottom right'
                                        width={28}
                                        height={28}
                                    />
                                </div>
                            </button>
                            <div className={`bg-white text-black transition-all duration-1000 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="xl:px-40 md:px-9 px-7 xl:py-28 md:py-9 py-7">
                                    <div className='md:flex justify-between w-full'>
                                        <div className='lg:w-5/12 md:w-6/12 w-full'>
                                            <h4 className='md:text-4xl text-2xl md:font-bold font-semibold leading-30 md:pb-0 pb-10'>{faq.innderHeading}</h4>
                                        </div>
                                        <div className='lg:w-6/12 md:w-6/12 w-full flex flex-col gap-4'>
                                            <p className='md:text-1.5xl text-base font-light leading-32'>
                                                {faq.innderDescription}
                                            </p>
                                            <div className='flex justify-end'>
                                                <LinkToGo
                                                    linkText={'MORE ABOUT'}
                                                    arrowTopRight={arrowTopRight}
                                                    href={'#'}
                                                    icon={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}