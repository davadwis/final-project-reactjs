import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {

    return (
        <div className="flex flex-row">

        <aside id="default-sidebar" className="top-0 left-0 z-0 w-36 h-screen" aria-label="Sidebar">
            <div className="h-screen px-3 py-4 overflow-y-auto bg-primary dark:bg-gray-800">
            <ul className="space-y-2 font-medium mt-20 text-sm">
                <li>
                <Link
                to="/dashboard"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-primary"
                >
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ml-3">Dashboard</span>
                </Link>
                </li>
                <li>
                <Link
                to="/dashboard/list-job"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-primary"
                >
                    <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M2 5h17m-9 8V6M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"/>
                    </svg>
                    <span className="ml-3">Table Job</span>
                </Link>
                </li>
                <li>
                <Link
                to="/dashboard/list-job/create"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-primary"
                >
                    <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span className="ml-3">Create Data</span>
                </Link>
                </li>
                <li>
                <Link
                to="/dashboard/profile"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-primary"
                >
                    <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span className="ml-3">Profile</span>
                </Link>
                </li>
                <li>
                <Link
                to="/dashboard/change-password"
                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 group hover:text-primary"
                >
                    <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
                    </svg>
                    <span className="ml-3">Change Password</span>
                </Link>
                </li>
            </ul>
            </div>
        </aside>
        {/* <section className="bg-white w-full">
        <div className="py-8 px-4 mx-auto text-center mt-56 max-w-screen-md">
            Ini Konten Dashboard
        </div>
        </section> */}
        </div>

    )
}
export default SideBar;