import React from 'react';
import Image from 'next/image';
import teamImage from '../../../../public/images/team.png';
import { DefaultBtn } from '../buttons/DefaultBtn';

export const TeamManagement = () => {
    return (
        <section className="bg-yellowLight py-74 px-28">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <Image
                        src={teamImage}
                        alt='team image'
                        width={1068}
                        height={670}
                    />
                </div>
                <div className='text-left content-center w-5/6'>
                    <div className='text-4xl tracking-space00 mb-12 font-normal'>
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