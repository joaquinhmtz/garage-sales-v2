import Sidebar from "@/components/Sidebar";

export default function LayoutContent ({ children }) {
    return (
        <>
            <Sidebar></Sidebar>
            {children}
        </>
    )
}