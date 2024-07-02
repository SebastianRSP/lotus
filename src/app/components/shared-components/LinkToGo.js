import Image from "next/image"
import Link from "next/link"

export const LinkToGo = ({extras, href, linkText, arrowTopRight, icon}) => {
    return (
        <Link href={href} className={`${extras} flex underline uppercase text-lg font-medium left-16`}>
            {linkText}
            {icon && (
                <Image
                    src={arrowTopRight}
                    alt="arrow"
                    width={15}
                    height={15}
                />
            )}
        </Link>
    )
}