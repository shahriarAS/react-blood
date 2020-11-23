import React, { useEffect } from 'react'
import RootReducer from "../Redux/RootReducer"
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../Config/FirebaseConfig';

function FetchCurrentUser() {
    const AllUsers = useSelector(state => state.AllUser)
    const dispatch = useDispatch(RootReducer)

    function CheckUser() {
        // event.preventDefault()
        firebase.auth().onAuthStateChanged(function (login_user) {
            if (login_user) {
                const CurrentUserPayload = AllUsers[Object.keys(AllUsers).filter(user => AllUsers[user].Email == login_user.email)[0]]
                console.log("CurrentUserPayload", CurrentUserPayload)
                dispatch({
                    type: "GetCurrentUser",
                    payload: CurrentUserPayload
                })
            }
        });
    }


    useEffect(() => {
        CheckUser()
    }, [AllUsers])

    return (
        <div>

        </div>
    )
}

export default FetchCurrentUser
