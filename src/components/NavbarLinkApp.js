'use client'

import Link from "next/link";

export default function NavbarLinkApp ({ item, sidebarExpanded }) {

    return (
        <Link href={item.href} className={ `${ sidebarExpanded ? "p-4 mt-2" : "p-5" } flex hover:bg-gray-300 hover:rounded-md` }>
            <div className= { `${ sidebarExpanded ? "justify-center" : "justify-start" } w-full flex items-center` }>
                {item.icon}
                <span 
                className={ `${
                    sidebarExpanded ? "lg:hidden" : "block"
                } text-1xl font-sm font-md text-gray-800 focus:outline-none focus:ring ml-3 cursor-pointer whitespace-nowrap transition-opacity ease-in-out delay-150 duration-300` }>
                    {item.name}
                </span>
            </div>
        </Link> 
    )
}