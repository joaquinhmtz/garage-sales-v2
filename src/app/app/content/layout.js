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
            <div className="flex h-screen bg-gray-100">
                
                <SidenavbarApp 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen}
                />

                <div className="flex flex-col flex-1 overflow-y-auto">
                    {isMobile ? (
                        <MobileHeaderApp 
                        sidebarOpen={sidebarOpen} 
                        setSidebarOpen={setSidebarOpen}
                        className="sticky top-0 bg-white border-b border-slate-200 z-30"
                        />
                    ) : (
                        <HeaderApp/>
                    )}
                    <div className="w-full h-full overflow-y-auto p-6">
                        {children}
                    </div>
                </div>

            </div>
        </>
    )
}