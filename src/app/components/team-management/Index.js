import React from 'react';
import Image from 'next/image';
import teamImage from '../../../../public/images/team.png';
import { DefaultBtn } from '../buttons/DefaultBtn';

export const TeamManagement = () => {
    return (
        <section id='teammanagement' className="forced-full-width fade-in-out">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 py-74 px-10">
                <div className="lg:col-span-2 sm:forced-full-width px-2">
                    <Image
                        src={teamImage}
                        alt='team image'
                        width={1068}
                        height={670}
                    />
                </div>
                <div className='text-left content-center w-full sm:w-5/6 md:pt-0 pt-14'>
                    <div className='2xl:text-4xl xl:text-1.5xl text-1.5xl tracking-space00 mb-12 font-light'>
                        A longstanding and trusted
                        data management team
                        comprised ex filecoin
                        veterans - the world&#39;s
                        leading decentralised data
                        storage protocol, and
                        one of the world&rsquo;s largest
                        crypto assets.
                    </div>
                    <DefaultBtn
                        btnText={'LEARN MORE'}
                        btnType={'button'}
                    />
                </div>
            </div>
        </section>
    )
}