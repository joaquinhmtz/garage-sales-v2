'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarLink ({ item }) {

    const pathname = usePathname();

    function SetAriaCurrent (item) {
        item["current"] = false;
        
        item.current = (item.href === pathname ? true : false);
    }

    return (
        <Link 
        key={item.name}
        href={item.href}
        aria-current={item.current}
        className={classNames(
            item.current ? 'bg-gray-200 text-black hover:bg-gray-100 font-bold' : 'text-gray-500 hover:bg-gray-100',
            'rounded-md px-3 py-2 text-sm font-medium'
        )}
        onClick={SetAriaCurrent(item)}
        >
            {item.name}
        </Link>
    )
}