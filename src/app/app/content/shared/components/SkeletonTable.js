export default function SkeletonTable () {

    return (
        <>
            <div className="bg-white rounded-md p-4 w-full ring-1 ring-gray-200 overflow-x-auto animate-pulse">
                <table className="w-full caption-bottom text-sm whitespace-nowrap">
                    <thead>
                        <tr className="border-b">
                            <th className="h-12 px-4 text-left">
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </th>
                            <th className="h-12 px-4 text-left">
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </th>
                            <th className="h-12 px-4 text-left">
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </th>
                            <th className="h-12 px-4 text-left">
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </th>
                            <th className="h-12 px-4 text-left">
                                <div className="h-2 bg-slate-400 rounded"></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                            <tr key={i} className="odd:bg-white even:bg-slate-50">
                                <td className="h-10 px-4 py-2 text-left align-middle">
                                    <div className="h-2 bg-slate-300 rounded"></div>
                                </td>
                                <td className="h-10 px-4 py-2 text-left align-middle">
                                    <div className="h-2 bg-slate-300 rounded"></div>
                                </td>
                                <td className="h-10 px-4 py-2 text-left align-middle">
                                    <div className="h-2 bg-slate-300 rounded"></div>
                                </td>
                                <td className="h-10 px-4 py-2 text-left align-middle">
                                    <div className="h-2 bg-slate-300 rounded"></div>
                                </td>
                                <td className="h-10 px-4 py-2 text-left align-middle">
                                    <div className="h-2 bg-slate-300 rounded"></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}