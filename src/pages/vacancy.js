import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import FilterData from "../components/filterData";

const JobVacancy = () => {

    const { state, handleFunction } = useContext(GlobalContext)

    const {
        fetchStatus, setFetchStatus,
        records,
    } = state

    const {
        handleSalary,
        handleStatus,
        fetchData,
    } = handleFunction

    useEffect(() => {
        if (fetchStatus === true) {
        fetchData()
    }
    }, [fetchStatus, setFetchStatus, fetchData])

    return (
        <>
        <SearchBar />
        <FilterData />
        <div className="grid-cols-1 sm:grid md:grid-cols-3 p-16">
            {records !== null && records.map((res, index) => {
                return (
                    <> 
                            <div className="mx-3 mt-4 flex flex-col rounded-lg border-solid border-2 border-gray-100 bg-white shadow-xl sm:shrink-0 sm:grow sm:basis-0">
                                <Link
                                key={index}
                                to={`/job-vacancy/${res.id}`}
                                >
                                        <p className="sr-only">{index + 1}</p>
                                        <img className="rounded-md h-48 w-48 m-auto mt-4" src={res.company_image_url} alt={res.company_name} />
                                        <div className="p-6">
                                            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                            {res.title} ({res.job_tenure})
                                            </h5>
                                        <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                            <p>{res.company_name}</p>
                                            <p>{res.company_city}, {res.job_type}</p>
                                            <p>{handleStatus(res.job_status)}</p>
                                            <div className='relative border-solid border-transparent bg-green-400 rounded-md w-auto m-auto'>
                                                <p className="text-center text-green-100 font-bold text-sm my-2">
                                                    {handleSalary(res.salary_min)} - {handleSalary(res.salary_max)}
                                                </p>
                                            </div>
                                            <p className="float-right font-light">
                                                    {res.updated_at}
                                            </p>
                                        </div>
                                        </div>
                                </Link>                     
                            </div>
                    </>
                )
            })}
        </div>
        </>
    )
}
export default JobVacancy;