"use client"

import * as React from "react"
import { RiSunLine, RiMoonFill } from "react-icons/ri"
import { useTheme } from "next-themes"

export const ToggleMode = (): JSX.Element => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme: string | undefined = theme === "system" ? systemTheme : theme;
    return (
        <div>
            {currentTheme === "dark" ? (
                <button
                    onClick={() => setTheme("light")}
                    className="bg-slate-100 rounded-xl p-2"
                >
                    <RiSunLine size={20} color="black" />
                </button>
            ) : (
                <button
                    onClick={() => setTheme("dark")}
                    className="bg-slate-100 rounded-xl p-2"
                >
                    <RiMoonFill size={20} color="black" />
                </button>
            )}
        </div>
    )
};