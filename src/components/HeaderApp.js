export default function HeaderApp () {
    return (
        <>
            <header className="w-full h-20 flex items-center sticky top-0 bg-white border-b border-slate-200 z-30">
                <div className="w-full px-4 sm:px-8 lg:px-8">
                    <div className="flex items-center justify-between -md-px">
                        <div className="flex">
                            account setting
                        </div>

                        <div className="flex">
                            account session
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}