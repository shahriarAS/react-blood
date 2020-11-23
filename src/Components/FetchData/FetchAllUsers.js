import React, { useEffect } from 'react'
import RootReducer from "../Redux/RootReducer"
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../Config/FirebaseConfig';

function FetchAllUsers() {
    const dispatch = useDispatch(RootReducer)

    function GetAllUser() {
        firebase.database().ref().child("users").on("value", snapshot => {
            if (snapshot.val() != null) {
                dispatch({
                    type: "PopulateAllUsers",
                    payload: snapshot.val()

                })
            }
            else {
            }
        })
    }

    useEffect(() => {
        GetAllUser()
    }, [])

    return (
        <>
        </>
    )
}

export default FetchAllUsers