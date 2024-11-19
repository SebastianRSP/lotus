import Image from "next/image";
import arrowRightGreen from '../../../../public/icons/arrow-right-green.svg';

export const MobileLink = ({ navLinkName, navLink, index, handleToggle }) => {
    return (
        <p
            key={index}
            onClick={() => handleToggle(navLink)}
            className="uppercase cursor-pointer flex gap-4 items-center text-white hover:text-green border-b-2 last:border-b-0 border-green py-4 group"
        >
            {navLinkName}
            <span className="hidden group-hover:block">
                <Image
                    src={arrowRightGreen}
                    alt="arrow right"
                    width={19}
                    height={11}
                />
            </span>
        </p>
    );
}
