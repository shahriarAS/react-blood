import React, { useEffect, useState } from 'react'
import Header from '../Utilities/Header'
import firebase from '../Config/FirebaseConfig';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import UserDetaill from '../Utilities/UserDetaill';
import { useSelector } from 'react-redux';
import Donor_List_Row from '../Utilities/Donor_List_Row';

import divisions from "../JsonData/Division"
import districts from "../JsonData/Districts"
import upazilas from "../JsonData/Upazilas"
import Footer from '../Utilities/Footer';

function Donor_List() {
    var AllUsers = useSelector(state => state.AllUser)
    const DataFetch = useSelector(state => state.DataFetch)
    const [open, setOpen] = useState(false);
    const [ModalData, setModalData] = useState()
    const [SearchVal, setSearchVal] = useState("")
    const [FilteredAllUsers, setFilteredAllUsers] = useState([])
    const [blood_group_filter, setblood_group_filter] = useState("all")
    const [donor_status, setdonor_status] = useState("all")

    const [division_state, setdivision_state] = useState()
    const [district_state, setdistrict_state] = useState()
    const [upazila_state, setupazila_state] = useState()

    var AllUsersList = Object.keys(AllUsers)

    if (SearchVal.length != 0) {
        var AllUsersList = AllUsersList.filter(user => (AllUsers[user].Full_Name).toLowerCase().includes(SearchVal) || (AllUsers[user].Location).toLowerCase().includes(SearchVal) || (AllUsers[user].District).toLowerCase().includes(SearchVal) || AllUsers[user].Division.toLowerCase().includes(SearchVal) || (AllUsers[user].Upazila).toLowerCase().includes(SearchVal))
    }

    if (blood_group_filter != "all") {
        console.log(blood_group_filter)
        var AllUsersList = AllUsersList.filter(i => AllUsers[i].Blood_Group == blood_group_filter)
    }

    if (donor_status != "all") {
        console.log(donor_status)
        if (donor_status == "ready") {

            var AllUsersList = AllUsersList.filter(
                i =>
                    AllUsers[i].Donated != "yes" || (CheckStatus(new Date(), new Date(AllUsers[i].Last_Donated.split("-")[0], AllUsers[i].Last_Donated.split("-")[1])) == true)
            )
        }
        else {
            var AllUsersList = AllUsersList.filter(
                i =>
                    AllUsers[i].Donated == "yes" && (CheckStatus(new Date(), new Date(AllUsers[i].Last_Donated.split("-")[0], AllUsers[i].Last_Donated.split("-")[1])) == false)
            )
        }
    }

    if (division_state && division_state != "all") {
        var AllUsersList = AllUsersList.filter(i => AllUsers[i].Division_ID == division_state)
    }

    if (district_state && district_state != "all") {
        var AllUsersList = AllUsersList.filter(i => AllUsers[i].District_ID == district_state)
    }

    if (upazila_state && upazila_state != "all") {
        var AllUsersList = AllUsersList.filter(i => AllUsers[i].Upazila_ID == upazila_state)
    }

    function onOpenModal(onOpenData) {
        setModalData(onOpenData)
        setOpen(true)
    }

    const onCloseModal = () => setOpen(false);

    function CheckStatus(dateFrom, dateTo) {
        const month = (dateTo.getMonth() - 1) - dateFrom.getMonth() +
            (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
        if (Math.abs(month) >= 4) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <div className="overflow-hidden">
            <Header />
            <div className="container mx-auto px-4 sm:px-8">
                <div className="py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Filters</h2>
                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="flex flex-row mb-1 sm:mb-0">
                            <div className="relative">
                                <select
                                    value={blood_group_filter}
                                    onChange={(event) => setblood_group_filter(event.target.value)}
                                    className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="all">All</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative">
                                <select
                                    value={donor_status}
                                    onChange={(event) => setdonor_status(event.target.value)}
                                    className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="all">All</option>
                                    <option value="unable">Unable</option>
                                    <option value="ready">Ready</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    value={division_state}
                                    onChange={(event) => setdivision_state(event.target.value)}
                                    className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="all">All</option>
                                    {divisions.map(division => (
                                        <option key={division.id} value={division.id}>{division.name}</option>
                                    ))}
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    value={district_state}
                                    onChange={(event) => setdistrict_state(event.target.value)}
                                    className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option value="all" >All</option>
                                    {districts.filter(district => district.division_id == division_state).map(district => (
                                        <option key={district.id} value={district.id}>{district.name}</option>
                                    ))
                                    }
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative">
                                <select
                                    value={upazila_state}
                                    onChange={(event) => setupazila_state(event.target.value)}
                                    className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                    <option value="all" >All</option>
                                    {upazilas.filter(upazila => upazila.district_id == district_state).map(upazila => (
                                        <option key={upazila.id} value={upazila.id}>{upazila.name}</option>
                                    ))
                                    }
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="block relative">
                            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search"
                                className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" value={SearchVal} onChange={(event) => setSearchVal(event.target.value)} />
                        </div>
                    </div>
                </div></div>
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                <div className="container mx-auto">
                    <div className="align-middle inline-block min-w-full shadow bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg ">
                        <div className="container mx-auto py-2">
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Blood Group</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">District</th>
                                        <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {DataFetch ? (
                                        AllUsersList.map(
                                            (user, index) => (
                                                <Donor_List_Row key={index} index={index} user={user} AllUsers={AllUsers} CheckStatus={CheckStatus} onOpenModal={onOpenModal} st="search" />
                                            )
                                        )

                                    )
                                        : "LOADING"}
                                    <Modal open={open} onClose={onCloseModal}>
                                        {
                                            ModalData ? (
                                                <UserDetaill
                                                    Full_Name={ModalData.Full_Name}
                                                    Email={ModalData.Email}
                                                    Phone={ModalData.Phone}
                                                    Blood_Group={ModalData.Blood_Group}
                                                    Gender={ModalData.Gender}
                                                    Division={ModalData.Division}
                                                    District={ModalData.District}
                                                    Upazila={ModalData.Upazila}
                                                    Location={ModalData.Location}
                                                    Last_Donated={ModalData.Last_Donated}
                                                />
                                            ) : ""
                                        }
                                    </Modal>
                                </tbody>
                            </table>
                        </div>
                        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                            <div>
                                <p className="text-sm leading-5 text-blue-700">
                                    Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">200</span>
                of
                <span className="font-medium">2000</span>
                results
            </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex shadow-sm">
                                    <div	>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Previous">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            1
                    </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            2
                    </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            3
                    </a>
                                    </div>
                                    <div v-if="pagination.current_page < pagination.last_page">
                                        <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Donor_List
