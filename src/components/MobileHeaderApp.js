import { Bars3Icon } from '@heroicons/react/24/outline'

export default function MobileHeaderApp ({ sidebarOpen, setSidebarOpen }) {
    return (
        <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
            <div className="px-4 sm:px-8 lg:px-8">
                <div className="flex items-center justify-between h-16 -md-px">
                    {/* Header: Left side */}
                    <div className="flex">
                        <button
                        className="text-slate-500 hover:text-slate-600 lg:hidden"
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}>
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}