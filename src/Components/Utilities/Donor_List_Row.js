import React from 'react'

function Donor_List_Row(props) {
    const { index, user, AllUsers, CheckStatus, onOpenModal, st } = props
    // console.log(st)
    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="flex items-center">
                    <div>
                        <div className="text-sm leading-5 text-gray-800">#{index + 1}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                <div className="text-sm leading-5 text-blue-900">{AllUsers[user].Full_Name}</div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden className="absolute inset-0 bg-red-300 opacity-50 rounded-full"></span>
                    <span className="relative text-xs">{AllUsers[user].Blood_Group}</span>
                </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">+88{AllUsers[user].Phone}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                {AllUsers[user].Donated == "yes" ?
                    (CheckStatus(new Date(), new Date(AllUsers[user].Last_Donated.split("-")[0], AllUsers[user].Last_Donated.split("-")[1])) == true) ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative text-xs">Ready</span>
                        </span>
                    ) : (
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-red-400 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">Unable</span>
                            </span>
                        ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative text-xs">Ready</span>
                        </span>
                    )
                }
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{AllUsers[user].District}</td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none" onClick={() => onOpenModal(AllUsers[user])}>View Details</button>
            </td>
        </tr>
    )
}

export default Donor_List_Row
