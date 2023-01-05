
import React, {useState} from "react";

export default function FormC() {

  //PERTAMA BUAT INI
  const[values, setValues]=useState({
    firstName : "",
    lastName : "",
    email : ""
  })

  // KETIGA BUAT INI
  const[submitted, setSubmitted]=useState(false)

  // KEENAM
  const[valid, setValid]=useState(false)

  // KEDUA BUAT INI
  const handleFirstname = (event)=>{
    setValues({...values, firstName:event.target.value})
  }
  const handleLastname = (event)=>{
    setValues({...values, lastName:event.target.value})
  }
  const handleEmail = (event)=>{
    console.log({...values, email:event.target.value})
    setValues({...values, email:event.target.value})
  }

  // KEEMPAT BUAT SUBMIT
  const handleSubmit = (event)=>{
    event.preventDefault()

    // KETUJUH
    if(values.firstName && values.lastName && values.email){
      setValid(true)
    }
    
    setSubmitted(true)
  }

  return (
  <div className="max-w-xs">
  <form className="p-5" onSubmit={handleSubmit}>
    {submitted && valid ? <div className="success-messgae">Success! Thank you for register</div> : null}
    
    <input placeholder="First Name" 
    onChange={handleFirstname}
    value={values.firstName} name="firstName" type="text" id="first-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    {submitted && !values.firstName ? <span className="text-red-500">enter first name</span> : null}
    
    <input placeholder="Last Name" 
    onChange={handleLastname}
    value={values.lastName}  name="lastName" type="text" id="last-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    {submitted && !values.lastName ? <span className="text-red-500">enter last name</span> : null}
    
    <input placeholder="Email" 
    onChange={handleEmail}
    value={values.email}  name="email" type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    {submitted && !values.email ? <span className="text-red-500">enter email</span> : null}
    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
  </div>
  );
}
