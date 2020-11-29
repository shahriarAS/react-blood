import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import firebase from '../Config/FirebaseConfig';

import divisions from "../JsonData/Division"
import districts from "../JsonData/Districts"
import upazilas from "../JsonData/Upazilas"
import { useSelector } from 'react-redux';

function UpdateProfile() {
    var AllUsers = useSelector(state => state.AllUser)
    const CurrentUser = useSelector(state => state.CurrentUser)
    const [reg_status, setReg_status] = useState()
    const { register, errors, handleSubmit, watch, reset } = useForm(
        {
            mode: "onChange",
        }
    );
    const [Donated, setDonated] = useState(AllUsers[CurrentUser].Donated);

    function UpdateFunc(data, event) {
        event.preventDefault()
        firebase.database().ref().child(`users/${CurrentUser}`).update({
            Full_Name: data.Full_Name,
            Email: data.Email,
            Phone: data.Phone,
            Blood_Group: data.Blood_Group,
            Gender: data.Gender,
            Division: divisions.filter(division => division.id == data.Division)[0].name,
            District: districts.filter(district => district.id == data.District)[0].name,
            Upazila: upazilas.filter(upazila => upazila.id == data.Upazila)[0].name,
            Division_ID: data.Division,
            District_ID: data.District,
            Upazila_ID: data.Upazila,
            Location: data.Location,
            Donated: data.Donated,
            Last_Donated: (data.Last_Donated ? data.Last_Donated : "N/A"),

        })
        // firebase.auth().createUserWithEmailAndPassword(
        //     data.Email, data.Password
        // )
        //     .then(resp => {
        //         setReg_status({ code: "success", message: "Your account has been successfully created." })
        //         CreateUserInDB(data)
        //         reset()
        //     })
        //     .catch(function (error) {
        //         setReg_status({ code: "error", message: error.message })
        //     });
    }
    return (
        <>
            <form onSubmit={handleSubmit(UpdateFunc)}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 container m-auto">
                    <h1 className="mb-6 text-3xl text-center font-bold">Update Your Profile</h1>
                    <hr className="mb-6" />
                    {
                        reg_status ? (reg_status.code == "error" ? (
                            <div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 mb-8">
                                <div className="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                    <span className="text-red-500">
                                        <svg fill="currentColor"
                                            viewBox="0 0 20 20"
                                            className="h-6 w-6">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="alert-content ml-4">
                                    <div className="alert-title font-semibold text-lg text-red-800">
                                        Error
				</div>
                                    <div className="alert-description text-sm text-red-600">
                                        {reg_status.message}
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300 mb-8">
                                    <div className="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                        <span className="text-green-500">
                                            <svg fill="currentColor"
                                                viewBox="0 0 20 20"
                                                className="h-6 w-6">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="alert-content ml-4">
                                        <div className="alert-title font-semibold text-lg text-green-800">
                                            Success
				</div>
                                        <div className="alert-description text-sm text-green-600">
                                            {reg_status.message}
                                        </div>
                                    </div>
                                </div>
                            )) : ""
                    }
                    <div className="-mx-3 md:flex mb-6 items-center">
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>
                        <div className="md:w-1/4 px-3 text-center text-xl">
                            Personal Information
                        </div>
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>

                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="full_name">
                                Full Name
              </label>
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="full_name" type="text" placeholder="John Doe" name="Full_Name" defaultValue={AllUsers[CurrentUser].Full_Name} ref={register({ required: "Please enter your first name.", minLength: 6 })} />
                            {errors.Full_Name?.type === "required" && (
                                <p className="text-red-400 text-xs font-bold italic">This Full Name Field Is Required.</p>
                            )}
                            {errors.Full_Name?.type === "minLength" && (
                                <p className="text-red-400 text-xs font-bold italic">This Full Name should be at least 6 characters long.</p>
                            )}
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="email">
                                Email
              </label>
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="john.doe@gmail.com" name="Email" defaultValue={AllUsers[CurrentUser].Email} readOnly ref={register({
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                            {errors.Email?.type === "required" && (
                                <p className="text-red-400 text-xs font-bold italic">This Email Field Is Required.</p>
                            )}
                            {errors.Email?.type === "pattern" && (
                                <p className="text-red-400 text-xs font-bold italic">This Is Not A Valid Email.</p>
                            )}
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="gender">
                                Gender
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="gender" name="Gender" defaultValue={AllUsers[CurrentUser].Gender} ref={register({ required: true })} >
                                    <option value="none">None</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                {watch("Gender") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This Gender Field Is Required.</p>
                                )}
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="phone">
                                Phone Number
              </label>
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="phone" type="tel" placeholder="01780974765" name="Phone" defaultValue={AllUsers[CurrentUser].Phone} ref={register({
                                required: true,
                                pattern: /(01)\d{9}/,
                            })} />
                            {errors.Phone?.type === "required" && (
                                <p className="text-red-400 text-xs font-bold italic">This Phone Number Field Is Required.</p>
                            )}
                            {errors.Phone?.type === "pattern" && (
                                <p className="text-red-400 text-xs font-bold italic">This Phone Number Is Not Valid.</p>
                            )}
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6 items-center">
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>
                        <div className="md:w-1/4 px-3 text-center text-xl">
                            Blood Information
                        </div>
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>

                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="blood_group">
                                Blood Group
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="blood_group" name="Blood_Group" defaultValue={AllUsers[CurrentUser].Blood_Group} ref={register({ required: true })} >
                                    <option value="none">None</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                                {watch("Blood_Group") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This Blood Group Field Is Required.</p>
                                )}
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="donated">
                                Donated
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="donated" name="Donated" ref={register({ required: true })} defaultValue={AllUsers[CurrentUser].Donated} onChange={(event) => setDonated(event.target.value)}>
                                    <option value="none">None</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                                {watch("Donated") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This Donated Field Is Required.</p>
                                )}
                            </div>
                        </div>
                        {
                            Donated == "yes" ? (
                                <div className="md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="donated_date">
                                        Last Date
</label>
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="donated_date" type="date" name="Last_Donated" defaultValue={AllUsers[CurrentUser].Last_Donated} ref={register({ required: true })} />
                                    {errors.Last_Donated?.type === "required" && (
                                        <p className="text-red-400 text-xs font-bold italic">This Last Donated Field Is Required.</p>
                                    )}
                                </div>
                            ) : ""
                        }
                    </div>
                    <div className="-mx-3 md:flex mb-6 items-center">
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>
                        <div className="md:w-1/4 px-3 text-center text-xl">
                            Location Information
                        </div>
                        <div className="md:w-1/2 px-3 border-2 border-red-400 h-1">
                        </div>

                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="division">
                                Division
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="division" name="Division" ref={register({ required: true })} >
                                    {divisions.map(division => (
                                        <option key={division.id} value={division.id}>{division.name}</option>
                                    ))}
                                </select>
                                <p className="pl-2 mb-2">Previous Division Selected : <span className="text-red-600">{AllUsers[CurrentUser].Division}</span></p>
                                {watch("Division") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This Division Field Is Required.</p>
                                )}
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="district">
                                District
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="district" name="District" defaultValue={AllUsers[CurrentUser].District_ID} ref={register({ required: true })} >
                                    {districts.filter(district => district.division_id == watch("Division")).map(district => (
                                        <option key={district.id} value={district.id}>{district.name}</option>
                                    ))
                                    }
                                </select>
                                <p className="pl-2 mb-2">Previous District Selected : <span className="text-red-600">{AllUsers[CurrentUser].District}</span></p>
                                {watch("District") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This District Field Is Required.</p>
                                )}
                            </div>
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="upazila">
                                Upazila
              </label>
                            <div className="relative">
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="upazila" name="Upazila" defaultValue={AllUsers[CurrentUser].Upazila_ID} ref={register({ required: true })} >
                                    {upazilas.filter(upazila => upazila.district_id == watch("District")).map(upazila => (
                                        <option key={upazila.id} value={upazila.id}>{upazila.name}</option>
                                    ))
                                    }
                                </select>
                                <p className="pl-2 mb-2">Previous Upazila Selected : <span className="text-red-600">{AllUsers[CurrentUser].Upazila}</span></p>
                                {watch("Upazila") === "none" && (
                                    <p className="text-red-400 text-xs font-bold italic">This Upazila Field Is Required.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="location">
                                Location
</label>
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="location" type="text" placeholder="Amla" name="Location" defaultValue={AllUsers[CurrentUser].Location} ref={register({ required: true })} />
                            {errors.Location?.type === "required" && (
                                <p className="text-red-400 text-xs font-bold italic">This Location Field Is Required.</p>
                            )}
                        </div>
                    </div>
                    <input type="submit" className="py-4 bg-green-400 rounded text-white text-2xl" value="Update Profile" />
                </div>
            </form>
        </>
    )
}

export default UpdateProfile