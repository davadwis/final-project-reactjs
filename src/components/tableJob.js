import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import SideBar from "./sideBar";

const TableJob = () => {

    const { state, handleFunction } = useContext(GlobalContext)

    const {
        data,
        fetchStatus, setFetchStatus,
    } = state

    const {
        handleEdit,
        handleDelete,
        handleSalary,
        handleStatus,
        fetchData
    } = handleFunction

    useEffect(() => {
        if (fetchStatus === true) {
        fetchData()
    }
    },[fetchStatus, setFetchStatus, fetchData])

    return (
        <>
            <div className="flex flex-row">
            <SideBar />
            <section className="bg-white w-full">
            <div className='m-auto w-full h-full overflow-x-auto relative'>
                <table className='w-full h-full text-sm table-auto mt-16 text-center'>
                    <thead className='text-xs bg-gray-100'>
                        <tr>
                            <th scope="col" class='py-2 px-2'>NO</th>
                            <th scope="col" class='py-2 px-2'>TITLE</th>
                            <th scope="col" class='py-2 px-2'>QUALIFICATION</th>
                            <th scope="col" class='py-2 px-2'>TYPE</th>
                            <th scope="col" class='py-2 px-2'>TENURE</th>
                            <th scope="col" class='py-2 px-2'>STATUS</th>
                            <th scope="col" class='py-2 px-2'>COMPANY</th>
                            <th scope="col" class='py-2 px-2'>CITY</th> 
                            <th scope="col" class='py-2 px-2'>DESCRIPTION</th>
                            <th scope="col" class='py-2 px-2'>IMAGE</th>
                            <th scope="col" class='py-2 px-2'>SALARY</th>
                            <th scope="col" class='py-2 px-2'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data !== null && data.map((res, index) => {
                            return (
                            <tr key={index} className="border-b border-2 border-gray-200">
                                <td className="font-bold py-2 px-2">{index + 1}</td>
                                <td className="font-bold py-2 px-2">{res.title}</td>
                                <td className='line-clamp-1 py-2 px-2'>{res.job_qualification}</td>
                                <td className='py-2 px-2'>{res.job_type}</td>
                                <td className='py-2 px-2'>{res.job_tenure}</td>
                                <td className='py-2 px-2'>{handleStatus(res.job_status)}</td>
                                <td className='py-2 px-2'>{res.company_name}</td>
                                <td className='py-2 px-2'>{res.company_city}</td>
                                <td className='line-clamp-1 py-2 px-2'>{res.job_description}</td>
                                <td className='py-2 px-2'><img src={res.company_image_url} alt="img company"></img></td>
                                <td className='py-2 px-2'>{handleSalary(res.salary_min)} - {handleSalary(res.salary_max)}</td>
                                <td className='py-2 px-2'>
                                    <div className='inline-flex gap-2'>
                                        <button 
                                        value={res.id}
                                        onClick={handleEdit}
                                        className='text-white bg-gradient-to-r from-yellow-300 via-yellow-300 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                                        >
                                            Edit
                                        </button>
                                        <button 
                                        onClick={handleDelete} 
                                        value={res.id}
                                        className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                                        > 
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </section>
            </div>
            
        
        </>
    )

}
export default TableJob;