import Image from "next/image"
import neil_sumaru from '../../../../../public/about-us/team/neil-sumaru.png';
import thomas_hsu from '../../../../../public/about-us/team/thomas-hsu.png';
import carl_maybin from '../../../../../public/about-us/team/carl-maybin.png';
import jimmy_jobe from '../../../../../public/about-us/team/jimmy-jobe.png';
import giovanni_morana from '../../../../../public/about-us/team/giovanni-morana.png';
import daniele_zito from '../../../../../public/about-us/team/daniele-zito.png';
import ravi_rai from '../../../../../public/about-us/team/ravi-rai.png';
import bill from '../../../../../public/about-us/team/bill.png';
import alvin_reyes from '../../../../../public/about-us/team/alvin-reyes.png';
import linkedIn from '../../../../../public/about-us/icons/linkedin.svg';
import Link from "next/link";

export const LeaderShipTeam = () => {

    const teamLeaderShip = [
        {
            leaderName: 'NEIL SUMARU',
            leaderProfileImage: neil_sumaru,
            leaderDesignation: 'Chairman',
            leaderCompany: 'LOTUS DATA GROUP',
            description: 'Neil Sumaru is Co-founder and Chairman of Lotus Data Group which is comprised of three subsidiaries, SenData Tech, Sen Pegasus, and Sen Whale AI (which collectively make up the SenD token ecosystem). Neil is a Founder of each of these companies and sits on the respective boards as Chairman.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'THOMAS HSU',
            leaderProfileImage: thomas_hsu,
            leaderDesignation: 'CEO',
            leaderCompany: 'LOTUS DATA GROUP',
            description: 'Thomas was Chief Architect/Technical Vice President at Microsoft Technology Center. During his tenure, he won numerous awards, including SQL Compete Win Award 2007, Microsoft Gold Award 2010, TECHREADY IMPACT AWARD 2014 and Microsoft 15 Key Awards 2004-2015.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'CARL MAYBIN',
            leaderProfileImage: carl_maybin,
            leaderDesignation: 'Advisor',
            leaderCompany: 'LOTUS DATA GROUP',
            description: 'Carl A. Maybin II is an advisor to Lotus Data Group and former CEO and Founder of several IT and telecom companies including VersiPay Tech, a mobile payments platform connecting global banks and telecom carriers, and IP Triple Communications, a telecom provider that privatized infrastructure at Yokota Air Base in Japan.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'JIMMY JOBE',
            leaderProfileImage: jimmy_jobe,
            leaderDesignation: 'CEO',
            leaderCompany: 'SENDATA',
            description: 'An executive with over 30 years of experience specializing in technology management with extensive entrepreneurial leadership in managed solution services and building new products, applications and businesses. He has broad experience in software product and managed solution services.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'GIOVANNI MORANA',
            leaderProfileImage: giovanni_morana,
            leaderDesignation: 'CTO',
            leaderCompany: 'SENDATA',
            description: 'Dr. Morana has been leading R&D teams for many years and was involved with the new CANS and SenData architectures from the beginning. Dr. Morana has held several research and development positions with STMicroelectronics, Centro Competenza, Kawa Objects and the University of Catania.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'DANIELE ZITO',
            leaderProfileImage: daniele_zito,
            leaderDesignation: 'CPA & Head of R&D',
            leaderCompany: 'SENDATA',
            description: 'Dr. Daniele Zito has a Ph.D. and a master’s degree in Computer and Telecommunication Engineering from University of Catania, Italy. In his 10+ years of experience in ICT industry, Daniele has collaborated with several companies, covering several positions such as Software Developer, Senior Software Architect and VP of Engineering.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'RAVI RAO',
            leaderProfileImage: ravi_rai,
            leaderDesignation: 'CSO',
            leaderCompany: 'SENDATA',
            description: 'Neil Sumaru is Co-founder and Chairman of Lotus Data Group which is comprised of three subsidiaries, SenData Tech, Sen Pegasus, and Sen Whale AI (which collectively make up the SenD token ecosystem). Neil is a Founder of each of these companies and sits on the respective boards as Chairman.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'BILL SCHRECKENSTEIN',
            leaderProfileImage: bill,
            leaderDesignation: 'CEO',
            leaderCompany: 'PEGASUS',
            description: 'Bill Schreckenstein is the Chief Executive Officer at Pegasus Data Technologies, where he leads the company’s strategic direction while contributing technical knowledge to the development of the core Pegasus products. With over 24 years of experience in the industry Bill has had a large array of prestigious titles. ranging from software engineer, system administrator, integration engineer and team lead.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
        {
            leaderName: 'ALVIN REYES',
            leaderProfileImage: alvin_reyes,
            leaderDesignation: 'CTO',
            leaderCompany: 'PEGASUS',
            description: 'Alvin Reyes is the Chief Technology Officer at Pegasus Data Technologies, where he leads the company’s technological direction and contributes to ongoing innovation in data technology. With a background in various global companies, Alvin brings over 15 years of experience as a Software Engineer to his current role.',
            linkedInProfileLink: 'https://www.linkedin.com/in/neilsumaru'
        },
    ];

    return (
        <div className="bg-white 2xl:py-40 xl:py-32 md:py-16 py-8 2xl:px-40 md:px-20 px-5">
            <div className="sm:grid flex flex-col items-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 2xl:gap-9 xl:gap-5 lg:gap-3 gap-7">
                <div className="xl:col-span-2 lg:col-span-2 col-span-2 text-left">
                    <h4 className="bg-green capitalize text-black 2xl:text-5xl lg:text-3xl md:text-2xl text-xl 2xl:leading-64 lg:leading-40 md:leading-34 leading-7 2xl:font-normal font-medium inline px-0.2">
                        Our leadership  <br /> team
                    </h4>
                    <p className="xl:text-xl md:text-lg text-sm font-extralight 2xl:w-3/6 xl:w-5/6 md:w-5/6 pt-9">
                        A longstanding and trusted data
                        management team comprised of
                        ex filecoin veterans - the world's
                        leading decentralised data storage
                        protocol, and one of the world’s largest crypto assets.
                    </p>
                </div>
                {teamLeaderShip.map((team, index) => (
                    <div key={index} className="flex flex-col 2xl:gap-9 xl:gap-5 lg:gap-3 gap-7 md:col-span-1 sm:col-span-1 col-span-2 w-fit group">
                        <div className="cursor-pointer rounded-lg flex justify-center">
                            <div className="relative inset-0 overflow-hidden">
                                <Image
                                    className="rounded-lg md:w-available sm:w-80 w-72 2xl:h-23.125r xl:h-80 md:h-23 sm:h-96 "
                                    src={team.leaderProfileImage}
                                    alt={`${team.leaderName} profile image`}
                                    objectFit="cover"
                                />
                                <div className="absolute inset-0 rounded-lg transition-all ease-in duration-500 translate-x-[-110%] group-hover:translate-x-[0]">
                                    <div className="flex justify-center items-center w-full h-full px-5 py-9 filter bg-black/60 backdrop-blur-30 rounded-lg">
                                        <p className="text-white xl:text-base md:text-sm text-xs font-extralight">
                                            {team.description}
                                        </p>
                                    </div>
                                    <div className="absolute inset-0 flex justify-end items-end">
                                        <Link href={team.linkedInProfileLink} target="_blank">
                                            <Image
                                                src={linkedIn}
                                                className="relative -right-2 -bottom-2"
                                                alt="linkedin icon"
                                                width={44}
                                                height={44}
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col leading-6 text-center">
                            <span className="2xl:text-xl 2xl:leading-6 font-bold relative inline-block">
                                <span className="name-background">{team.leaderName}</span>
                            </span>
                            <span className="text-lg leading-6 font-extralight">{team.leaderDesignation},</span>
                            <span className="text-sm font-extralight">{team.leaderCompany}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}