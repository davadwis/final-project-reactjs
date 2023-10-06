import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import SideBar from "../components/sideBar";

const ChangePassword = () => {

    const { state,handleFunction } = useContext(GlobalContext)

    const {
        input,
        showPassword
    } = state

    const {
        handleChangePassword,
        handleInput,
        togglePasswordVisibility,
    } = handleFunction

    return (
        <>
        <div className="flex flex-row">
            <SideBar />
        <form 
        onSubmit={handleChangePassword}
        className="border-2 border-solid border-gray-200 md:w-1/3 m-auto p-10 mt-32 mb-10 rounded-md shadow-xl sm:w-3/4">
            <h5 className="font-bold text-3xl mb-4">Change Your Password</h5>
            <div className="mb-6">
                <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                <input 
                type={showPassword ? "text" : "password"} 
                name={'current_password'}
                onChange={handleInput}
                value={input.current_password}
                minLength={8}
                id="current_password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                required />

                <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                <input 
                type={showPassword ? "text" : "password"} 
                name={'new_password'}
                onChange={handleInput}
                value={input.new_password}
                minLength={8}
                id="new_password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                required />

                <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                <input 
                type={showPassword ? "text" : "password"} 
                name={'new_confirm_password'}
                onChange={handleInput}
                value={input.new_confirm_password}
                minLength={8}
                id="new_confirm_password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " 
                required />
                <button
                type="button" 
                className="text-gray-900 bg-gray-200 mt-5 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                onClick={togglePasswordVisibility}
                >Show/Hide Password</button>
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input 
                id="terms" 
                type="checkbox" 
                defaultValue 
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" 
                required />
                </div>
                <label htmlFor="terms" className="ml-2 text-sm font-light text-gray-900">I agree with the <Link to="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
            </div>
            <input type={'submit'} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/><br></br>
            <label htmlFor="login" className="ml-2 text-sm font-light text-gray-900">Don't Have an Account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up Here</Link></label>
        </form>
        </div>
        </>
    )
}
export default ChangePassword;