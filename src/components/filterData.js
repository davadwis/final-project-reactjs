'use client';
import React, { useContext} from "react";
import { Accordion } from 'flowbite-react';
import { GlobalContext } from "../context/GlobalContext";

const FilterData = () =>{

    const { handleFunction } = useContext(GlobalContext)

    const {
        filterCompanyName,
        filterCompanyCity,
        filterJobTenure
    } = handleFunction

  return (
    <Accordion collapseAll className='w-1/3 m-auto mt-5'>
      <Accordion.Panel>
        <Accordion.Title>
          Filter
        </Accordion.Title>
        <Accordion.Content>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 text-center">Company Name</label>
                <input type="search" id="small-input" onChange={filterCompanyName}  placeholder="The Company Name. . ." className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 text-center">Company City</label>
                <input type="search" id="small-input" onChange={filterCompanyCity} placeholder="The Company City. . ." className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium  text-gray-900 text-center">Job Tenure</label>
                <input type="search" id="small-input" onChange={filterJobTenure}  placeholder="The Job Tenure. . ." className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
            </div>
            
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
export default FilterData;