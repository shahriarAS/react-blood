import React from 'react'
import firebase from '../Config/FirebaseConfig';

function LogOutPage() {
    function LogOut() {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        <div>
        </div>
    )
}


export default LogOutPage
