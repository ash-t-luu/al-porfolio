"use client"

import * as React from "react"
import { RiSunLine, RiMoonFill } from "react-icons/ri"
import { useTheme } from "next-themes"

export const ToggleMode = (): JSX.Element => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme: string | undefined = theme === "system" ? systemTheme : theme;

    return (
        <div>
            <button
                className="bg-slate-100 rounded-xl p-2"
                onClick={() => { currentTheme === 'dark' ? setTheme('light') : setTheme('dark') }}
            >
                {currentTheme === 'dark' ? <RiSunLine size={20} color='black' /> : <RiMoonFill size={20} color="black" />}
            </button>
        </div>
    )
};