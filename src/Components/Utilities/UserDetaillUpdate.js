import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import firebase from '../Config/FirebaseConfig';

import divisions from "../JsonData/Division"
import districts from "../JsonData/Districts"
import upazilas from "../JsonData/Upazilas"

function UserDetaill(props) {
    const {
        DictKey,
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

    const [reg_status, setReg_status] = useState()
    const { register, errors, handleSubmit, watch, reset } = useForm(
        {
            mode: "onChange",
        }
    );
    const [Donated, setDonated] = useState();

    function UpdateUserInDB(data) {
        firebase.database().ref("users/").child(DictKey).update({
            Full_Name: data.Full_Name,
            Phone: data.Phone,
            Blood_Group: data.Blood_Group,
            Gender: data.Gender,
            Donated: data.Donated,
            Last_Donated: (data.Last_Donated ? data.Last_Donated : "N/A"),

        });
    }


    function SignUpFunc(data, event) {
        event.preventDefault()
        console.log(data)
        // firebase.auth().createUserWithEmailAndPassword(
        //     data.Email, data.Password
        // )
        //     .then(resp => {
        //         setReg_status({ code: "success", message: "Your account has been successfully created." })
        //         UpdateUserInDB(data)
        //         reset()
        //     })
        //     .catch(function (error) {
        //         setReg_status({ code: "error", message: error.message })
        //     });
    }

    return (
        <div class="leading-loose">
            <form onSubmit={handleSubmit(SignUpFunc)}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 container m-auto">
                    <h1 class="mb-6 text-3xl text-center font-bold">Sign Up As Blood Donor</h1>
                    <hr className="mb-6" />
                    {
                        reg_status ? (reg_status.code == "error" ? (
                            <div class="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 mb-8">
                                <div class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                    <span class="text-red-500">
                                        <svg fill="currentColor"
                                            viewBox="0 0 20 20"
                                            class="h-6 w-6">
                                            <path fill-rule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class="alert-content ml-4">
                                    <div class="alert-title font-semibold text-lg text-red-800">
                                        Error
				</div>
                                    <div class="alert-description text-sm text-red-600">
                                        {reg_status.message}
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div class="alert flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300 mb-8">
                                    <div class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                        <span class="text-green-500">
                                            <svg fill="currentColor"
                                                viewBox="0 0 20 20"
                                                class="h-6 w-6">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="alert-content ml-4">
                                        <div class="alert-title font-semibold text-lg text-green-800">
                                            Success
				</div>
                                        <div class="alert-description text-sm text-green-600">
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
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="full_name" type="text" placeholder="John Doe" name="Full_Name" defaultValue={Full_Name} ref={register({ required: "Please enter your first name.", minLength: 6 })} />
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
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="john.doe@gmail.com" name="Email" defaultValue={Email} readOnly ref={register({
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
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="gender" name="Gender" defaultValue={Gender} ref={register({ required: true })} >
                                    <option defaultValue="none">None</option>
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
                            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="phone" type="tel" placeholder="01780974765" name="Phone" defaultValue={Phone} ref={register({
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
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="blood_group" name="Blood_Group" defaultValue={Blood_Group} ref={register({ required: true })} >
                                    <option defaultValue="none">None</option>
                                    <option defaultValue="A+">A+</option>
                                    <option defaultValue="A-">A-</option>
                                    <option defaultValue="O+">O+</option>
                                    <option defaultValue="O-">O-</option>
                                    <option defaultValue="B+">B+</option>
                                    <option defaultValue="B-">B-</option>
                                    <option defaultValue="AB+">AB+</option>
                                    <option defaultValue="AB-">AB-</option>
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
                                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-16 rounded" id="donated" name="Donated" defaultValue={Donated} ref={register({ required: true })} onChange={(event) => setDonated(event.target.value)}>
                                    <option defaultValue="none">None</option>
                                    <option defaultValue="no">No</option>
                                    <option defaultValue="yes">Yes</option>
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
                                    <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="donated_date" type="date" name="Last_Donated" defaultValue={Last_Donated} ref={register({ required: true })} />
                                    {errors.Last_Donated?.type === "required" && (
                                        <p className="text-red-400 text-xs font-bold italic">This Last Donated Field Is Required.</p>
                                    )}
                                </div>
                            ) : ""
                        }
                    </div>
                    <input type="submit" className="py-4 bg-green-400 rounded text-white text-2xl" defaultValue="Sign Up" />
                </div>
            </form>
        </div>
    )
}

export default UserDetaill
