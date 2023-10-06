import React, { useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalContext";
import SideBar from "./sideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const Create = () => {

    let { IdData } = useParams()

    const { state,handleFunction } = useContext(GlobalContext)

    const {
        input, setInput,
    } = state

    const {
        handleInput,
        handleSubmit,
    } = handleFunction

    useEffect(() => {
        if ( IdData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
            .then((res) => {
                let data = res.data

                setInput(
                    {
                        title : data.title,
                        job_qualification : data.job_qualification,
                        job_description : data.job_description,
                        job_tenure : data.job_tenure,
                        job_type : data.job_type,
                        company_name : data.company_name,
                        company_city : data.company_city,
                        company_image_url : data.company_image_url,
                        job_status : data.job_status,
                        salary_min : data.salary_min,
                        salary_max : data.salary_max
                    }
                )
            })
        }
    }, [IdData, setInput])

    return (
        <>
        <div className="flex flex-row">
        <SideBar />
        <section className="bg-white w-full p-8">
        <form 
        onSubmit={handleSubmit}
        className="mt-16 border-2 border-solid border-gray-200 shadow-xl rounded-md p-4 bg-purple-50">
            <div>
                <p className="text-center font-bold text-gray-600">Form Create & Update</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="title" 
                id="title" 
                value={input.title}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="title" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Title
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="job_qualification" 
                id="job_qualification" 
                value={input.job_qualification}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="job_qualification" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Job Qualification
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="job_description" 
                id="job_description" 
                value={input.job_description}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="job_description" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Job Description
                </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="job_tenure" 
                id="job_tenure" 
                value={input.job_tenure}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="job_tenure" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Job Tenure
                </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="job_type" 
                id="job_type" 
                value={input.job_type}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="job_type" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Job Type
                </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="company_name" 
                id="company_name" 
                value={input.company_name}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="company_name" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Company Name
                </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="company_city" 
                id="company_city" 
                value={input.company_city}
                onChange={handleInput}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="company_city" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Company City
                </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="text" 
                name="company_image_url" 
                id="company_image_url"
                value={input.company_image_url}
                onChange={handleInput} 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="company_image_url" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Company Image Url
                </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="number" 
                name="job_status" 
                id="job_status" 
                value={input.job_status}
                onChange={handleInput}
                min={0}
                max={1}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="job_status" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Job Status
                </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="number" 
                name="salary_min" 
                id="salary_min" 
                value={input.salary_min}
                onChange={handleInput}
                min={1}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="salary_min" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Salary Min
                </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                <input 
                type="number" 
                name="salary_max" 
                id="salary_max" 
                value={input.salary_max}
                onChange={handleInput}
                min={1}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required />
                <label 
                htmlFor="salary_max" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Salary Max
                </label>
                </div>
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
        </div>
        </>
    )
}
export default Create;