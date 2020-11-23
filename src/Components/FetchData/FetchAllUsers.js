import React, { useEffect, useState } from 'react'
import RootReducer from "../Redux/RootReducer"
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../Config/FirebaseConfig';
import { useQuery } from "react-query";

function FetchAllUsers() {
    const dispatch = useDispatch(RootReducer)

    function GetAllUser() {
        dispatch({
            type: "loading"
        })
        firebase.database().ref().child("users").on("value", snapshot => {
            if (snapshot.val() != null) {
                dispatch({
                    type: "PopulateAllUsers",
                    payload: snapshot.val()

                })
            }
            else {
            }
            dispatch({
                type: "success"
            })
        })
    }

    const {status, data, error} = useQuery("ALLUSER", GetAllUser);

    useEffect(() => {
        GetAllUser()
    }, [])

    return (
        <>
        </>
    )
}

export default FetchAllUsers