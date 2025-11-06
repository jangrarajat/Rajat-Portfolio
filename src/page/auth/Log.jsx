import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function Profile() {
    const { user, login, logout } = useContext(UserContext);

    return (
        <>

            <div className="h-[100vh] w-screen bg-white ">

            </div>
        </>
    );
}

export default Profile;
