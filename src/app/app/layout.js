'use client'

export default function AppLayout({ children }) {
  return (
    <>
        {children}
    </>
    // <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
    //   <div className="flex-grow">
    //     <main className="my-0 py-16">{children}</main>
    //   </div>
    //     layout app
    // </div>
    
  );
}