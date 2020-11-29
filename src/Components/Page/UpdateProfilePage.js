import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from "../Utilities/Header"
import UpdateProfile from "../Utilities/UpdateProfile"

function SignUpPage() {
    var AllUsers = useSelector(state => state.AllUser)
    const CurrentUser = useSelector(state => state.CurrentUser)
    if (CurrentUser) {
        return (
            <div>
                <Header />
                <UpdateProfile />
            </div>
        )
    }
    else {
        return <Redirect to='/' />
    }
}

export default SignUpPage