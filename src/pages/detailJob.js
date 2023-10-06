import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import Load from "../components/load";
import {useNavigate} from 'react-router-dom';

const DetailJob = () => {

    const { state, handleFunction } = useContext(GlobalContext)

    let navigate = useNavigate()

    let { IdData } = useParams();

    const {
        data, setData,
    } = state

    const {
        handleStatus,
        handleSalary,
    } = handleFunction

    useEffect(() => {
        
        if (IdData !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
            .then((res) =>{
                console.log(res.data)
                setData((res.data))
            })
        }
    }, [IdData, setData])    
        

    return (
        <>
        <div>
            {data ? (
                <section>
                    <button onClick={() => navigate(-1)} className="mt-32 ml-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0">Back</button>
                    <div className='gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-6 lg:px-6'>
                        <img className="rounded-lg m-auto p-10 h-96 w-auto" src={data.company_image_url} alt={data.company_name}></img>
                        <div className='p-6'>
                            <h5 className="mb-2 text-4xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                                {data.title} ({data.job_tenure})
                            </h5>
                            <p className="font-bold my-2">{data.company_name} - {data.job_type} </p>
                            <p className="my-2"><span className="font-bold">Status : </span>{handleStatus(data.job_status)}</p>
                            <p className="my-2"><span className="font-bold">City : </span>{data.company_city}</p>
                            <p className="my-2"><span className="font-bold">Job Qualification : </span>{data.job_qualification}</p>
                            <p className="my-2"><span className="font-bold">Job Description : </span>{data.job_description}</p>
                            <p className="my-2"><span className="font-bold">Salary : </span>{handleSalary(data.salary_min)} - {handleSalary(data.salary_max)}</p>
                        </div>
                    </div>
                </section>
            ) : (
                <div>
                    <Load />
                </div>
            )}
        </div>
        </>
    )
}
export default DetailJob;