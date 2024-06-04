import Link from "next/link";
import { FC } from "react"

export const navItemData = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: "Courses",
        url: "/courses",
    },
    {
        name: "About",
        url: '/about'
    },
    {
        name: 'Policy',
        url: '/policy'
    },
    {
        name: "FAQ",
        url: '/faq'
    },
]

type Props = {
    activeItems: number;
    isMobile: boolean;
}

const NavItems: FC<Props> = ({ activeItems, isMobile }) => {
    return (
        <>
            <div className="hidden 800px:flex">
            {
                navItemData && navItemData.map((i, index) => (
                    <Link href={`${i.url}`} key={index} passHref>
                        <span className={`${activeItems === index ?
                                "dark:text-[#37a39a] text-[crimson]"
                                : "dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400]`}>
                            {i.name}
                        </span>
                    </Link>
                ))
            }
            </div>
            {
                isMobile && (
                    <div className="800px:hidden mt-5">
                        {/* Adding Logo Here */}
                        <div className="w-full text-center py-6 text-[20px] font-Popping font-[500]">
                        <Link href='/' passHref>
                                    <span className="dark:text-[#d6e5e3] text-[#6c3fe9]">
                                        ELearning
                                    </span>
                        </Link>
                        </div>
                            {
                            navItemData && navItemData.map((i, index) => (
                                <Link href='/' passHref>
                                    <span className={`${activeItems === index ?
                                            "dark:text-[#37a39a] text-[crimson]"
                                            : "dark:text-white text-black"} block py-5 text-[18px] px-6 font-Poppins font-[400]`}>
                                        {i.name}
                                    </span>
                                </Link>
                            ))
                            }

                    </div>
                )
            }
        </>
    )
}

export default NavItems;