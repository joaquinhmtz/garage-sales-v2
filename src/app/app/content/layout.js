"use client"

import { useEffect, useState } from "react"
import MobileHeaderApp from "@/components/MobileHeaderApp"
import SidenavbarApp from "@/components/SidenavbarApp";
import HeaderApp from "@/components/HeaderApp";

export default function LayoutContent ({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="flex h-screen bg-gray-200">
                
                <div>
                    <SidenavbarApp 
                    sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen}
                    />
                </div>

                <div className="relative flex flex-col flex-1 lg:overflow-y-auto lg:overflow-x-hidden">
                    {isMobile ? (
                        <MobileHeaderApp 
                        sidebarOpen={sidebarOpen} 
                        setSidebarOpen={setSidebarOpen}
                        className="sticky top-0 bg-white border-b border-slate-200 z-30"
                        />
                    ) : (
                        <HeaderApp/>
                    )}
                    <main>
                        {children}
                    </main>
                </div>

            </div>
            {/* <Sidebar></Sidebar> */}
        </>
    )
}