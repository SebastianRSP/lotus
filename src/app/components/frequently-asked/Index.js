'use client'

import logo from '../../../../public/icons/logo.svg';
import arrowBottomRight from '../../../../public/icons/arrow-bottom-right.svg';
import arrowTopRight from '../../../../public/icons/arrow-top-right.svg';
import Image from "next/image";
import { LinkToGo } from '../shared-components/LinkToGo';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    },
];

export const FrequentlyAsked = () => {



    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleAccordion = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className="bg-black border-2 border-black">
            <div className="px-40 pt-14 bg-white pb-44 flex justify-between items-center border-2 border-black">
                <h4 className="text-144 font-medium leading-74">FAQs</h4>
                <Image
                    src={logo}
                    alt="Logo"
                    width={69}
                    height={37}
                />
            </div>
            <div className='bg-white my-2'>
                {faqs.map((faq, index) => (
                    <div key={index} className="accordion-group">
                        <div className={`${openFAQ === index ? 'bg-black text-green' : ''} accordion border-black divide-y`}>
                            <button
                                className="pl-40 text-30 font-normal leading-8 flex justify-between items-center w-full"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className={`border-black border-r w-full text-left py-5`}>
                                    <h5>{faq.question}</h5>
                                </div>
                                <div className='pr-24 pl-48 h-full'>
                                    <Image
                                        src={arrowBottomRight}
                                        alt='bottom right'
                                        width={28}
                                        height={28}
                                    />
                                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" size='lg'/>
                                </div>
                            </button>
                            <div className={`bg-white text-black transition-max-height duration-500 ease-in-out ${openFAQ === index ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                                <div className="px-40 py-28">
                                    <div className='flex justify-between w-full'>
                                        <div className='w-4/12'>
                                            <h4 className='text-4xl font-bold leading-40'>{faq.innderHeading}</h4>
                                        </div>
                                        <div className='w-4/12 flex flex-col gap-4'>
                                            <p className='text-30 font-normal leading-32'>
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