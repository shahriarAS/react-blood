import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../Config/FirebaseConfig';

function Login() {
    var [user, setuser] = useState()
    var provider = new firebase.auth.GoogleAuthProvider();
    const [Login_status, setLogin_status] = useState()

    const { register, errors, handleSubmit, watch, reset } = useForm(
        {
            mode: "onChange",
        }
    );

    function LoginFunc(data) {
        firebase.auth().signInWithEmailAndPassword(data.Email, data.Password)
            .then((user) => {
                // Signed in 
                // ...
                setLogin_status()
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                if (errorCode == "auth/user-not-found") {
                    setLogin_status({ code: "error", message: "User Not Found. Try to register or type email carefully" })
                    console.log(Login_status)
                }
                else {
                    setLogin_status({ code: "error", message: "Wrong Password.." })
                    console.log(Login_status)
                }
            });
    }

    useEffect(() => {
        CheckUser()
    }, [])

    function CheckUser() {
        // event.preventDefault()
        firebase.auth().onAuthStateChanged(function (login_user) {
            if (login_user) {
                console.log("Login STat", login_user)
                setuser(login_user)
                console.log("STATS USER", user)
            }
        });
    }


    function GoogleSignIn() {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // console.log(user)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;

            // ...
        });
    }

    if (user) {
        return <Redirect to='/' />
    }
    else {
        return (
            < div className="login_bg min-h-screen flex flex-col items-center justify-center" >
                <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    {
                        Login_status ? (<div className="alert flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300 mb-8">
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
                                    {Login_status.message}
                                </div>
                            </div>
                        </div>) : ""
                    }
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                    <button onClick={GoogleSignIn} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                        <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"><i className="fa fa-google"></i></span>
                        <span>Login with Google</span>
                    </button>
                    <div className="relative mt-10 h-px bg-gray-300">
                        <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                            <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
                        </div>
                    </div>
                    <div className="mt-10">
                        <form onSubmit={handleSubmit(LoginFunc)}>
                            <div className="flex flex-col mb-6">
                                <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    </div>

                                    <input id="email" type="email" name="Email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" ref={register({
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
                            <div className="flex flex-col mb-6">
                                <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                <div className="relative">
                                    <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <span>
                                            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </span>
                                    </div>

                                    <input id="password" type="password" name="Password" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" ref={register({ required: true, validate: true, minLength: 6 })} />
                                    {errors.Password?.type === "required" && (
                                        <p className="text-red-400 text-xs font-bold italic">This Password Field Is Required.</p>
                                    )}
                                    {errors.Password?.type === "minLength" && (
                                        <p className="text-red-400 text-xs font-bold italic">This Passsword should be at least 6 characters long.</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                                </div>
                            </div>

                            <div className="flex w-full">
                                <input type="submit" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in" value="Login" />

                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center items-center mt-6">
                        <Link to="/sign_up" className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                            <span>
                                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </span>
                            <span className="ml-2">You don't have an account?</span>
                        </Link>
                    </div>
                </div>
            </div >
        )
    }
}

export default Login
