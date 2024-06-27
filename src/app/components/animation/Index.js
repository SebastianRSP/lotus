import Image from 'next/image';
import defaultImage from '../../../../public/images/defaultImage.png';

export const LottieAnimation = () => {
    return (
        <div className="w-full bg-[#F2F2F2]">
            <Image
                src={defaultImage}
                layout="responsive"
                alt="default Image"
                className="w-full h-auto rounded-sm"
                width={731}
                height={217}
            />
        </div>
    )
}