import React, {createContext, useState} from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    let navigate = useNavigate()

    //UseState untuk fetching data
    const [data, setData] = useState(null)

    //Fetching data
    const [fetchStatus,setFetchStatus] = useState(true)

    //UseState untuk update data
    const [currentId,setCurrentId] = useState(-1)

    //Use state untuk input data
    const [input, setInput] = useState(
        {
            //Input Sign Up
            name : "",
            image_url : "",
            email : "",
            password : "",
            //Input Change Password
            current_password : "",
            new_password : "",
            new_confirm_password : "",
            //Input New Data
            title : "",
            job_qualification : "",
            job_description : "",
            job_tenure : "",
            job_type : "",
            company_name : "",
            company_city : "",
            company_image_url : "",
            job_status : "",
            salary_min : "",
            salary_max : ""
        }
    )

    //Use State untuk search Data
    const [ records, setRecords ] = useState([])

    //Usestate Visibility Password
    const [showPassword, setShowPassword] = useState(false);

    //Function and Handler
    //function fetch data
    let fetchData = () => {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res)=>{
            setData([...res.data.data])
            setRecords(res.data.data)
        })
        .catch((error)=>{
        })
        setFetchStatus(false)
    }

    //Function Search
    const searchData = (event) => {
        setRecords(data.filter(f => f.title.toLowerCase().includes(event.target.value)))
    }

    //Function Filter Data Job Vacancy
    const filterCompanyName = (event) =>{
        setRecords(data.filter(f => f.company_name.toLowerCase().includes(event.target.value)))
    }

    const filterCompanyCity = (event) =>{
        setRecords(data.filter(f => f.company_city.toLowerCase().includes(event.target.value)))
    }

    const filterJobTenure = (event) =>{
        setRecords(data.filter(f => f.job_tenure.toLowerCase().includes(event.target.value)))
    }

    //Function handleInput
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value });
    }

    //Function handleSignin
    const handleSignin = (event) => {
        event.preventDefault()

        let {
            email,
            password
        } = input

        axios.post(`https://dev-example.sanbercloud.com/api/login`, {email, password})
        .then((res) =>{
            console.log(res)
            let data = res.data
            Cookies.set('token', data.token, {expires : 1})
            Cookies.set('id', data.user.id)
            Cookies.set('name', data.user.name)
            Cookies.set('email', data.user.email)
            Cookies.set('image_url', data.user.image_url)
            Cookies.set('created_at', data.user.created_at)
            Cookies.set('updated_at', data.user.updated_at)
            navigate('/')
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Wrong E-Mail or Password'
              })
        })
    }

    //Function handleSignUp
    const handleSignup = (event) => {
        event.preventDefault()

        let {
            name,
            image_url,
            email,
            password
        } = input

        axios.post(`https://dev-example.sanbercloud.com/api/register `, 
        {
            name,
            image_url,
            email,
            password
        })
        .then((res) => {
            let data = res.data
            Cookies.set('token', data.token, {expires : 1})
            Cookies.set('id', data.user.id)
            Cookies.set('name', data.user.name)
            Cookies.set('email', data.user.email)
            Cookies.set('image_url', data.user.image_url)
            Cookies.set('created_at', data.user.created_at)
            Cookies.set('updated_at', data.user.updated_at)
            navigate('/')
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    //Function handleSignOut
    const handleSignout = (event) => {

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out!'
          }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove('token')
                navigate('/signin')
            }
          })

        setInput (
            {
                email : "",
                password : ""
            }
        )
    }

    //Function handleChangePassword
    const handleChangePassword = (event) => {
        event.preventDefault()

        let {
            current_password,
            new_password,
            new_confirm_password
        } = input

        if (new_password !== new_confirm_password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Password Doesn't Match"
              })
        } else {
            axios.post(`https://dev-example.sanbercloud.com/api/change-password`,
            {
                current_password,
                new_password,
                new_confirm_password
            },
            {
                headers: {"Authorization" : "Bearer " + Cookies.get('token')}
            }
            )
            .then((res)=> {
                navigate('/dashboard')
            })
            .catch((error)=> {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "Wrong Current Password"
                  })
            })
        }
    }

    //Function handleSubmit untuk handle Logic Create & Update
    const handleSubmit = (event) => {
        event.preventDefault()

        let {
            title,
            job_qualification,
            job_description,
            job_tenure,
            job_type,
            company_name,
            company_city,
            company_image_url,
            job_status,
            salary_min,
            salary_max
        } = input

        if (currentId === -1) {
            //Logic Create Data
            axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`,
            {
                title,
                job_qualification,
                job_description,
                job_tenure,
                job_type,
                company_name,
                company_city,
                company_image_url,
                job_status,
                salary_min,
                salary_max
            },
            {
                headers: {"Authorization" : "Bearer " + Cookies.get('token')}
            }
            )
            .then((res)=>{
                console.log(res)
                setFetchStatus(true)
                navigate('/dashboard/list-job')
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'New Data Has Been Added',
                  })
            })
            .catch((error)=>{
                alert(error.message)
            })
        } else {
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
            {
                title,
                job_qualification,
                job_description,
                job_tenure,
                job_type,
                company_name,
                company_city,
                company_image_url,
                job_status,
                salary_min,
                salary_max
            },
            {
                headers: {"Authorization" : "Bearer " + Cookies.get('token')}
            }
            )
            .then((res)=> {
                setFetchStatus(true)
                navigate('/dashboard/list-job')
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Data Has Been Edited',
                  })
            }) 
            .catch((error)=>{
                alert(error.message)
            })
        }

        setCurrentId(1)

        setInput(
            {
                title : "",
                job_qualification : "",
                job_description : "",
                job_tenure : "",
                job_type : "",
                company_name : "",
                company_city : "",
                company_image_url : "",
                job_status : "",
                salary_min : "",
                salary_max : ""
            }
        )

    }

    //Function hanldeEdit
    const handleEdit = (event) => {

        let IdData = parseInt(event.target.value)

        setCurrentId(IdData)

        navigate(`/dashboard/list-job/edit/${IdData}`)
    }

    //Function handleDelete
    const handleDelete = (event) =>{
        let IdData = parseInt(event.target.value)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`,
                {
                    headers: {"Authorization" : "Bearer " + Cookies.get('token')}
                }
                )
                .then((res) => {
                    setFetchStatus(true)
                })
                .catch((error) => {
                    alert(error.message)
                })

              Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
            }
          })   
    }

    //Function handleSalary
    const handleSalary = (rupiah) => {
        let rupiahFormat = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumSignificantDigits: 13 
          }).format(rupiah);

        return (
            rupiahFormat
        )
    }

    //Function handleStatus
    const handleStatus = (status) => {
        if (status === 1) {
            return (
                <span className='font-bold text-green-400'>
                    Open Hiring
                </span>
            )
        } else {
            return (
                <span className='font-bold text-red-400'>
                    Closed Hiring
                </span>
            )
        }
    }

    //Function Visibility Password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let state = {
        data, setData,
        input, setInput,
        currentId, setCurrentId,
        fetchStatus, setFetchStatus,
        records, setRecords,
        showPassword, setShowPassword
    }

    let handleFunction = {
        handleSalary,
        handleStatus,
        handleInput,
        handleSubmit,
        handleEdit,
        handleDelete,
        handleSignin,
        handleSignup,
        handleSignout,
        handleChangePassword,
        searchData,
        filterCompanyName,
        filterCompanyCity,
        filterJobTenure,
        togglePasswordVisibility,
        fetchData,
    }

    return (
        <GlobalContext.Provider value={
            { 
                state,
                handleFunction
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}