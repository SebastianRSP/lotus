import Image from "next/image";
import Link from "next/link";
import arrowRightGreen from '../../../../public/icons/arrow-right-green.svg';

export const MobileLink = ({ navLinkName, navLink, extras, key }) => {
    return (
        <Link
            href={navLink}
            key={key}
            className="uppercase flex gap-4 items-center text-white hover:text-green border-b-2 last:border-b-0 border-green py-4 group"
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
        </Link>
    );
}
