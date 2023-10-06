import React from "react";
import SideBar from "../components/sideBar";
import Cookies from "js-cookie";

const Dashboard = () => {

    return (
        <>
        <div className="flex flex-row">
        <SideBar />
        <div className="text-center mt-36 m-auto">
            <svg class="w-24 h-24 text-gray-400 dark:text-white m-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
            </svg>
            <p className="font-bold">Hi, {Cookies.get('name')}</p>
            <p className="font-bold text-5xl">Welcome To Dashboard</p>
            <p className="font-medium py-2">You can Create, Read, Delete & Update list data here</p>
        </div>
        </div>
        </>
    )
}
export default Dashboard;