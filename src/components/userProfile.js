import SideBar from "./sideBar";
import React from "react";
import Cookies from 'js-cookie';


const UserProfile = () => {
    return (
        <>
        <div className="flex flex-row">
            <SideBar />
            {
                <div className="mt-24 border-solid border-2 border-gray-200 m-auto p-5 rounded-md shadow-xl w-1/3">
                    <p className="font-bold text-3xl mb-4">{Cookies.get('name')}</p>
                    <div className="relative z-0 w-full mb-6 group">
                        <img className="rounded-full h-48 w-48 m-auto" src={Cookies.get('image_url')} alt="ProfilePhoto"></img>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <p className="font-bold text-3xl py-2">{Cookies.get('name')}</p>
                        <p className="font-bold">E-Mail : {Cookies.get('email')}</p>
                        <p className="py-1">Id User : {Cookies.get('id')}</p>
                        <p className="py-1">Created At : {Cookies.get('created_at')}</p>
                        <p className="py-1">Updated At : {Cookies.get('updated_at')}</p>
                    </div>   
                </div>
            }
        </div>
        </>
    )
}
export default UserProfile;