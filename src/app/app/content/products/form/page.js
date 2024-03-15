import { PhotoIcon } from "@heroicons/react/24/outline"

export default function FormProduct () {

    return (
        <>
            <form className="flex flex-col items-center justify-center">
                <div className="h-full rounded-md ring-1 ring-gray-200 bg-white p-6">
                    <div className="space-y-12">
                        <div className="border-b border-zinc-950/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Nuevo producto</h2>

                            <hr />

                            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="col-span-full">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Producto:
                                    </label>
                                    <div className="mt-1">
                                        <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-blue-500 sm:text-sm sm:leading-6"
                                        placeholder="Ej. Vestido rosa de tirantes"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Descripción de la prenda:
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                        id="description"
                                        name="description"
                                        rows={2}
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-blue-500 sm:text-sm sm:leading-6"
                                        placeholder="Ej. Prenda edición LV con Nike"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="brand" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Marca:
                                    </label>

                                    <div className="mt-1">
                                        <select
                                            id="brand"
                                            name="brand"
                                            autoComplete="brand-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                            <option>Zara</option>
                                            <option>Bershka</option>
                                            <option>Calvin Klein</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label htmlFor="size" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Talla:
                                    </label>

                                    <div className="mt-1">
                                        <select
                                            id="size"
                                            name="size"
                                            autoComplete="size-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Precio:
                                    </label>

                                    <div className="mt-1">
                                        <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        autoComplete="off"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus-within:ring-blue-500 sm:text-sm sm:leading-6"
                                        placeholder="Ej. $100.00"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="photos" className="block text-sm font-medium leading-6 text-zinc-950">
                                        Fotografías:
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-zinc-900/25 px-6 py-10">
                                        <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                            htmlFor="photos"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                                            >
                                            <span>Subir archivo</span>
                                            <input id="photos" name="photos" multiple={true} type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">o arrastra y pega</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-zinc-950">
                            Cancel
                        </button>
                        <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}