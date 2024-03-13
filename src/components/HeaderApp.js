export default function HeaderApp () {
    return (
        <>
            <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
                <div className="px-4 sm:px-8 lg:px-8">
                    <div className="flex items-center justify-between h-16 -md-px">
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