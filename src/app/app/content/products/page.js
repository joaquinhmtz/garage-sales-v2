"use client";

import Link from "next/link";
import { PlusIcon, PencilIcon, TrashIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { get, postNotForm } from "./../../content/shared/httpservice";
import SkeletonTable from "../shared/components/SkeletonTable";
import { Success, Error, Loading, Close, Question } from "./../shared/sweetalert";


export default function ProductList () {

    const [productList, setProductList] = useState([]);
    const [skeleton, setSkeleton] = useState(true);

    useEffect(() => {
        get("/api/v1/products/get/list", {})
            .then(res => {
                setProductList(res.data);
                setSkeleton(false);
            });
    }, [skeleton]);

    const GetProductList = async () => {
        try {
            setSkeleton(!skeleton);            
        } catch (e) {
            return e
        }
    }

    const DeleteProduct = (product) => {
        Question("¿Desea eliminar el producto?", product.name, async (result) => {
            if (result) {
                Loading("Eliminando...", "Espere un momento por favor");

                postNotForm("/api/v1/products/post/delete", product)
                    .then(res => {
                        Close();
                        
                        if (res.success) {
                            Success("¡Éxito!", res.msg);
                            setSkeleton(true);
                        } else {
                            Error("Ocurrió un error!", response.msg);
                        }
                    
                    })
            }
        });
    }

    return (
        <>
            <div className="bg-white p-6 md:py-7 w-full rounded-md ring-1 ring-gray-200">
                <div className="flex items-center justify-between">
                    <p tabIndex={0} className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-1xl font-bold leading-normal text-gray-800">
                        Listado de productos
                    </p>

                    <Link href={"/app/content/products/form"}>
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p className="text-sm font-medium leading-none text-white flex items-center justify-between">
                                <PlusIcon className="h-5 w-5 mr-2" /> Nuevo producto
                            </p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className="pt-4 pb-4 w-full flex items-center justify-between">
                <p tabIndex={0} className="focus:outline-none text-sm leading-normal text-gray-600">
                    Productos: [<span className="font-semibold">{productList.length}</span>]
                </p>
                <button className="rounded-md px-3 py-2 text-sm font-medium bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700"
                onClick={GetProductList}>
                    <ArrowPathIcon className="h-5 w-5" />
                </button>
            </div>

            {skeleton?<SkeletonTable />
            :
            <div className="w-full bg-white rounded-md px-6 pb-4 ring-1 ring-gray-200 overflow-x-auto">
                <table className="w-full caption-bottom text-sm whitespace-nowrap">
                    <thead>
                        <tr className="border-b">
                            <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 w-[100px]">
                                #
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                                Producto
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                                Marca / Talla
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                                Precio
                            </th>
                            <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">
                                Estatus
                            </th>
                            <th className="h-12 px-4 text-center align-middle font-medium text-slate-500 w-[120px]">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {productList.map((item, index) => (
                        <tr key={item._id} className="odd:bg-white even:bg-slate-50">
                            <td className="h-10 px-4 py-2 text-left align-middle font-regular text-zinc-950">
                                {index+1}
                            </td>
                            <td className="h-10 px-4 py-2 text-left align-middle font-semibold text-zinc-950 whitespace-nowrap">
                                {item.name || '-'}
                            </td>
                            <td className="h-10 px-4 py-2 text-left align-middle  text-zinc-950 whitespace-nowrap w-[210px]">
                                <div className="grid grid-cols-2">
                                    <div className="w-full flex flex-col flex-start">
                                        <div className="font-medium pr-1">Marca: </div>
                                        <div className="font-medium pr-1">Talla: </div>
                                    </div>
                                    <div className="w-full flex flex-col flex-start">
                                        <div className="font-regular px-1">{item.brand || '-'} </div>
                                        <div className="font-regular px-1">{item.size || '-'} </div>
                                    </div>
                                </div>
                            </td>
                            <td className="h-10 px-4 py-2 text-left align-middle text-zinc-950 whitespace-nowrap">
                                ${item.price || '-'}.00
                            </td>
                            <td className="h-10 px-4 py-2 text-left align-middle whitespace-nowrap">
                                <div className="flex items-center justify-center py-1 rounded-lg font-medium text-green-500 border-2 border-green-500 w-[100px]">
                                    Disponible
                                </div>
                            </td>
                            <td className="h-10 px-4 py-2 align-middle whitespace-nowrap  w-[120px]">
                                <div className="flex items-center justify-around">
                                    <button className="flex items-center justify-center rounded-lg font-medium text-gray-500 border-2 border-gray-400 p-2 hover:text-gray-600 hover:border-gray-600 hover:bg-gray-300">
                                        <PencilIcon className="h-4 w-4" />
                                    </button>
                                    <button className="flex items-center justify-center rounded-lg font-medium text-gray-500 border-2 border-gray-400 p-2 hover:text-gray-600 hover:border-gray-600 hover:bg-gray-300"
                                    onClick={() => DeleteProduct(item)}>
                                        <TrashIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                        
                        {/* 
                            <div className="flex items-center justify-center py-1 rounded-lg font-medium text-indigo-500 border-2 border-indigo-500 w-[100px]">
                                Apartado
                            </div>
                        */}
                    </tbody>
                </table>
            </div>}
        </>
    )
}