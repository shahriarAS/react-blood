import React from 'react'

function UserDetaill(props) {
    const {
        Full_Name,
        Email,
        Phone,
        Blood_Group,
        Gender,
        Division,
        District,
        Upazila,
        Location,
        Last_Donated } = props

    return (
        <div class="leading-loose">
            <form class="max-w-full p-10 bg-white rounded shadow-xl md:w-screen">
                <p class="text-gray-800 text-xl font-medium text-center">Full Information</p>
                <div className="-mx-3 md:flex my-2 items-center">
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>
                    <div className="md:w-1/2 px-3 text-center">
                        Personal Information
                        </div>
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>

                </div>
                <div class="mt-2">
                    <p class="block text-sm text-gray-00">Full Name</p>
                    <p class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" >{Full_Name}</p>
                </div>
                <div class="mt-2">
                    <p class="block text-sm text-gray-00">Email</p>
                    <p class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" >{Email}</p>
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                    <p class="block text-sm text-gray-600">Gender</p>
                    <p class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded">{Gender}</p>
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <p class="block text-sm text-gray-600">Phone</p>
                    <p class="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded">{Phone}</p>
                </div>
                <div className="-mx-3 md:flex my-2 items-center">
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>
                    <div className="md:w-1/2 px-3 text-center">
                        Blood Information
                        </div>
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>

                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                    <p class="block text-sm text-gray-600">Blood Group</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Blood_Group}</p>
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <p class="block text-sm text-gray-600">Last Donated</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Last_Donated == "N/A" ? "Never Donated" : Last_Donated}</p>
                </div>
                <div className="-mx-3 md:flex my-2 items-center">
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>
                    <div className="md:w-1/2 px-3 text-center">
                        Location Information
                        </div>
                    <div className="md:w-1/4 px-3 border-2 border-red-400 h-1">
                    </div>

                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                    <p class="block text-sm text-gray-600">Division</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Division}</p>
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <p class="block text-sm text-gray-600">District</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{District}</p>
                </div>
                <div class="inline-block w-1/2 pr-1">
                    <p class="block text-sm text-gray-600">Upazila</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Upazila}</p>
                </div>
                <div class="inline-block w-1/2 pl-1">
                    <p class="block text-sm text-gray-600">Location</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Location}</p>
                </div>
                {/* <div class="inline-block w-1/2 pl-1 opacity-0 pointer-events-none">
                    <p class="block text-sm text-gray-600">Location</p>
                    <p class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded">{Location}</p>
                </div> */}
            </form>
        </div>
    )
}

export default UserDetaill
