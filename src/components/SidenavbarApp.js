"use client"

import { useEffect, useRef, useState } from "react"
import NavbarLinkApp from "./NavbarLinkApp";
import { PaintBrushIcon, PowerIcon, UserIcon, Bars3Icon } from "@heroicons/react/24/outline";


export default function SidenavbarApp ({ sidebarOpen, setSidebarOpen }) {

    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const sidebar = useRef();

    const routes = [{
        key: 1,
        href: "/app/content/products",
        icon: <PaintBrushIcon className={ `${ sidebarExpanded ? "h-5 w-5" : "h-6 w-6" } text-gray-800` }/>,
        module: "products",
        name: "Productos"
    }, {
        key: 2,
        href: "/app/content/users",
        icon: <UserIcon className={ `${ sidebarExpanded ? "h-5 w-5" : "h-6 w-6" } text-gray-800` }/>,
        module: "users",
        name: "Usuarios"
    }];

    const logOutUser = {
        key: 100,
        href: "/app/login",
        icon: <PowerIcon className={ `${ sidebarExpanded ? "h-5 w-5" : "h-6 w-6" } text-gray-800` }/>,
        module: "logout",
        name: "Cerrar sesión"
    };

    useEffect(() => {
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <>
            <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden="true"
            >
            </div>


            <div
                id="sidebar"
                ref={sidebar}
                className={`fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 py-4 px-2 transition-all duration-200 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-72"
                }`}
            >
                <div className="w-full flex">
                    <div className= { `${ sidebarExpanded ? "justify-center" : "justify-start" } w-full flex items-center` }>
                        <button 
                        onClick={() => setSidebarExpanded(!sidebarExpanded)}
                        className={`${
                            sidebarExpanded ? "p-3" : "p-3"
                        } hover:bg-gray-300 hover:rounded-md`}
                        >
                            <Bars3Icon className={ `${ sidebarExpanded ? "h-8 w-8" : "h-6 w-6" } text-gray-800` } />
                        </button>
                        
                        <span 
                        className={ `${
                            sidebarExpanded ? "lg:hidden" : "block"
                        } text-1xl font-sm font-semibold text-gray-800 focus:outline-none focus:ring ml-3 whitespace-nowrap transition-opacity ease-in-out delay-150 duration-300` }>
                            Garage Sales App
                        </span>
                    </div>
                </div>

                <ul className={ `${ sidebarExpanded ? "mt-0" : "mt-5" }` }>
                    { routes.map((item, index) => (
                        <li 
                        key={index}>
                            <NavbarLinkApp 
                            item={item}
                            sidebarExpanded={sidebarExpanded}
                            >
                            </NavbarLinkApp>
                        </li>
                    ))}
                </ul>

                <div className="pt-3 lg:inline-flex  mt-auto ">
                    <div className="flex-1">
                        <div className="py-2 justify-end">
                            <NavbarLinkApp 
                            item={logOutUser}
                            sidebarExpanded={sidebarExpanded}
                            >
                            </NavbarLinkApp>
                        </div>
                    </div>
                </div>

                {/* <div className="pt-3 lg:inline-flex  mt-auto ">
                    <div className="flex-1">
                        <div className="px-3 py-2 justify-end">
                            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                                wejndedkjnejendjen
                                <span className="sr-only">Expand / collapse sidebar</span>
                            </button>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}