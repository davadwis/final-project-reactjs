import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const SignUp = () => {

    const { state,handleFunction } = useContext(GlobalContext)

    const {
        input,
        showPassword
    } = state

    const {
        handleInput,
        handleSignup,
        togglePasswordVisibility,
    } = handleFunction

    return (
        <form 
        onSubmit={handleSignup}
        className="border-2 border-solid border-gray-200 md:w-1/3 m-auto p-10 mt-32 mb-10 rounded-md shadow-xl sm:w-3/4">
            <h5 className="font-bold text-3xl mb-4">Create Account</h5>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input 
                type="text"
                onChange={handleInput}
                value={input.name} 
                id="name" 
                name="name" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Username" 
                required />
            </div>
            <div className="mb-6">
                <label htmlFor="image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                <input 
                type="text" 
                onChange={handleInput}
                value={input.image_url} 
                id="image_url" 
                name="image_url" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Image URL" 
                required />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                type="email" 
                onChange={handleInput}
                value={input.email} 
                id="email" 
                name="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="E-Mail" 
                required />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                onChange={handleInput}
                value={input.password} 
                id="password" 
                minLength={8}
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
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 px-5 py-2.5 text-center">Register new account</button><br></br>
                <label htmlFor="login" className="ml-2 text-sm font-light text-gray-900">Already Have an Account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In Here</Link></label>
            </form>

    )
}

export default SignUp;