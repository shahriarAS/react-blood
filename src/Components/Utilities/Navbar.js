import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import RootReducer from "../Redux/RootReducer"
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../Config/FirebaseConfig';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import UserDetaill from '../Utilities/UserDetaill';
import UserDetaillUpdate from '../Utilities/UserDetaillUpdate';

function Navbar() {
    const [open, setOpen] = useState(false);
    const [openUpdate, setopenUpdate] = useState(false)
    const [ModalData, setModalData] = useState()
    const CurrentUser = useSelector(state => state.CurrentUser)
    const AllUsers = useSelector(state => state.AllUser)
    const [menu_nav, setmenu_nav] = useState()

    const dispatch = useDispatch(RootReducer)

    function openNav() {
        setmenu_nav({ width: "100%" })
    }
    function closeNav() {
        setmenu_nav({ width: "0" })
    }

    function onOpenModal(onOpenData) {
        setModalData(onOpenData)
        setOpen(true)
    }

    function onOpenUpdate(onUpdateData) {
        setModalData(onUpdateData)
        setopenUpdate(true)
    }

    function onCloseUpdate(onUpdateData) {
        setopenUpdate(false)
    }

    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        CheckUser()
    }, [])

    function CheckUser() {
        firebase.auth().onAuthStateChanged(function (login_user) {
            if (login_user) {
                const CurrentUserPayload = AllUsers[Object.keys(AllUsers).filter(user => AllUsers[user].Email == login_user.email)[0]]
                const user_dict_key = Object.keys(AllUsers).filter(user => AllUsers[user].Email == login_user.email)
                // console.log("CurrentUserPayload", CurrentUserPayload)
                dispatch({
                    type: "GetCurrentUser",
                    payload: user_dict_key,
                })
            }
        });
    }

    function LogOut(event) {
        event.preventDefault()
        firebase.auth().signOut().then(function () {
            console.log("LoggedOut")
            dispatch({
                type: "LoggedOutUser"
            })
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }


    return (
        <>
            <nav
                className="navbar bg-red-600 text-base flex items-center px-10 lg:px-32 justify-between flex-col lg:flex-row gap-2 py-4">
                <div className="navbar__contact text-white flex gap-2 lg:gap-6 h-full items-center flex-col lg:flex-row">
                    <p className="text-center"><i className="fa fa-building mr-3"></i><span className="font-bold lg:mr-2">Contact:
                    </span>Mirpur, Kushtia, Bangladesh, 7030</p>
                    <p className="flex items-center"><i className="fa fa-phone mr-3"></i><span className="font-bold mr-2">Call Us:
                    </span>+880 1780974765</p>
                </div>
                <div className="navbar__social flex gap-2 text-white rounded-full border-none">
                    <a href="#"><i className="fa fa-facebook rounded-full text-2xl"></i></a>
                    <a href="#"><i className="fa fa-twitter rounded-full text-2xl"></i></a>
                    <a href="#"><i className="fa fa-youtube rounded-full text-2xl"></i></a>
                    <a href="#"><i className="fa fa-whatsapp rounded-full text-2xl"></i></a>
                    <a href="#"><i className="fa fa-instagram rounded-full text-2xl"></i></a>
                </div>
            </nav>
            <section className="logo_header flex h-24 bg-white items-center px-8 md:px-16 lg:px-32 justify-between border-b-2 border-red-400">
                <span className="menu block lg:hidden text-4xl cursor-pointer justify-self-start"
                    onClick={() => openNav()}>&#9776;</span>
                <div id="mySidenav" className="sidenav" style={menu_nav}>
                    <i className="closebtn fa fa-times text-white" onClick={() => closeNav()}></i>
                    <Link to="" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-home text-2xl mr-2"></i> Home</Link>
                    <Link to="/donor_list" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-list text-2xl mr-2"></i> Donor List</Link>
                    <a href="#" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-book text-2xl mr-2"></i> Blog</a>
                    <a href="#" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-image text-2xl mr-2"></i> Gallery</a>
                    <a href="#" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-user text-2xl mr-2"></i> About Us</a>
                    <a href="#" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                        className="fa fa-envelope text-2xl mr-2"></i> Contact</a>
                    <Link to="/sign_up" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i className="fa fa-user text-2xl mr-2"></i>Sign Up</Link>
                    {
                        (CurrentUser) ?
                            (
                                <a onClick={(event) => LogOut(event)} href="#" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                                    className="fa fa-door text-2xl mr-2"></i> Logout</a>
                            ) : (
                                <Link to="/login" className="navbar__item mr-5 hover:text-red-500 hover:font-bold"><i
                                    className="fa fa-door text-2xl mr-2"></i> Login</Link>
                            )
                    }
                </div>
                <div className="logo_header__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div
                    className="logo_header__nav hidden lg:flex justify-between h-full items-center gap-6 text-xl font-medium text-gray-700">
                    <Link to="" className="border-b-4 border-transparent hover:border-red-600">Home</Link>
                    <Link to="/donor_list" className="border-b-4 border-transparent hover:border-red-600">Donor List</Link>
                    <a href="/#About_Us" className="border-b-4 border-transparent hover:border-red-600">About Us</a>
                    <a href="#Team" className="border-b-4 border-transparent hover:border-red-600">Team</a>
                    <a href="#Contact" className="border-b-4 border-transparent hover:border-red-600">Contact</a>
                    <Link to="/sign_up" className="border-b-4 border-transparent hover:border-red-600">Sign Up</Link>
                    {
                        (AllUsers[CurrentUser]) ?
                            (
                                <>
                                    <div className="dropdown">
                                        <p className="dropbtn border-b-4 border-transparent"><i className="fa   fa-user-circle"></i> {AllUsers[CurrentUser].Full_Name.split(" ")[AllUsers[CurrentUser].Full_Name.split(" ").length - 1]}</p>
                                        <div className="dropdown-content">
                                            <a onClick={() => onOpenModal(CurrentUser)} href="#" className="border-b-4 border-transparent hover:border-red-600">Profile</a>
                                            <Link to="/update_profile" className="border-b-4 border-transparent hover:border-red-600">Update  Profile</Link>
                                            <a onClick={(event) => LogOut(event)} href="#" className="border-b-4 border-transparent hover:border-red-600">Logout</a>
                                        </div>
                                    </div>
                                    <Modal open={open} onClose={onCloseModal}>
                                        {
                                            ModalData ? (
                                                <UserDetaill
                                                    Full_Name={AllUsers[ModalData].Full_Name}
                                                    Email={AllUsers[ModalData].Email}
                                                    Phone={AllUsers[ModalData].Phone}
                                                    Blood_Group={AllUsers[ModalData].Blood_Group}
                                                    Gender={AllUsers[ModalData].Gender}
                                                    Division={AllUsers[ModalData].Division}
                                                    District={AllUsers[ModalData].District}
                                                    Upazila={AllUsers[ModalData].Upazila}
                                                    Location={AllUsers[ModalData].Location}
                                                    Last_Donated={AllUsers[ModalData].Last_Donated}
                                                />
                                            ) : ""
                                        }
                                    </Modal>
                                    <Modal open={openUpdate} onClose={onCloseUpdate}>
                                        {
                                            ModalData ? (
                                                <UserDetaillUpdate
                                                    DictKey={ModalData[0]}
                                                    Full_Name={AllUsers[ModalData].Full_Name}
                                                    Email={AllUsers[ModalData].Email}
                                                    Phone={AllUsers[ModalData].Phone}
                                                    Blood_Group={AllUsers[ModalData].Blood_Group}
                                                    Gender={AllUsers[ModalData].Gender}
                                                    Division={AllUsers[ModalData].Division}
                                                    District={AllUsers[ModalData].District}
                                                    Upazila={AllUsers[ModalData].Upazila}
                                                    Location={AllUsers[ModalData].Location}
                                                    Last_Donated={AllUsers[ModalData].Last_Donated}
                                                />
                                            ) : ""
                                        }
                                    </Modal>
                                </>

                            ) : (
                                <Link to="/login" className="border-b-4 border-transparent hover:border-red-600">Login</Link>
                            )
                    }
                </div>
            </section>
        </>
    )
}

export default Navbar
