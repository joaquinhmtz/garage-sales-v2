import Link from "next/link";

export default function ProductList () {
    return (
        <>
            <h2>Listado de productos</h2>

            <Link href={"/app/content/products/form"}>
                <button>
                    Nuevo producto
                </button>
            </Link>
        </>
    )
}