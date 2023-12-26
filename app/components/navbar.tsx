import { ToggleMode } from "../utils/light-dark-toggle"
import * as React from "react"
import Link from "next/link"

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Contact",
        page: "contact"
    },
    {
        label: "Home",
        page: "home"
    }
];

export const NavBar = () => {
    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow border-white text-black bg-white dark:bg-stone-900 dark:border-black dark:text-white">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        {/* <Link href="app"> */}
                        <div className="container flex items-center space-x-2">
                            <h2 className="text-2xl font-bold">Ashley Luu</h2>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>

                <div>
                    <div className="items-center justify-center space-y-3 md:flex md:space-x-6 md:space-y-0">
                        <Link href="contact">
                            {NAV_ITEMS[0].label}
                        </Link>
                        <ToggleMode />
                    </div>
                </div>
            </div>
        </header >
    );
}