'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react"
import { BiMoon, BiSun } from "react-icons/bi";

//dependency downloaded here react-icons

export const ThemeSwitcher = () => {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    });
    if (!mounted) { return null };

    return (
        <div className="flex items-center justify-center">
            {
                theme === 'light' ? (
                    <BiMoon
                        className="cursor-pointer"
                        filter='black'
                        size={25}
                        onClick={() => setTheme('dark')} />
                ) : (
                    <BiSun
                        className="cursor-pointer"
                        size={25}
                        onClick={() => setTheme('light')} />
                )
            }
        </div>
    )
}