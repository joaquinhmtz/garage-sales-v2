"use client"

import { useEffect, useRef, useState } from "react"

export default function SidenavbarApp ({ sidebarOpen, setSidebarOpen }) {

    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const sidebar = useRef();

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
                className={`fixed flex flex-col z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar lg:w-64  w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 sm:translate-x-0 p-4 transition-all duration-200 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-72"
                }`}
            >
                sidebar

                <div className="pt-3 lg:inline-flex  mt-auto ">
                    <div className="flex-1">
                        <div className="px-3 py-2 justify-end">
                            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                                wejndedkjnejendjen
                                <span className="sr-only">Expand / collapse sidebar</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}