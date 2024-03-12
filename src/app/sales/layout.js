import Navbar from "@/components/Navbar"

export default function SaleLayout({ children }) {
    return (
        <main>
            <section>
                <Navbar/>
        
                {children}
            </section>
        </main>
    )
  }