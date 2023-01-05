import React, { useState } from 'react'
import { useEffect } from 'react'

const ContactCard = (props)=>{
  const[showAge, setShowAge]=useState(false)

  return (
      <div className="contact-card">
        <img src={props.avatarUrl} alt="profile"></img>
        <div className="user-details">
          <p>Name : {props.name}</p>
          <p>Email : {props.email}</p>
          <button onClick={()=>setShowAge(!showAge)}>Show Age</button>
          {showAge && <p>Age : 36</p>}
        </div>
      </div>
  )
}
export default function Hapus2() {



  const [results, setResults]=useState([])

  useEffect (()=>{
    fetch("https:randomuser.me/api/?results=3")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }, [])
  return (
    <div>

      {results.map((result, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large}
          name = {result.first}
          email = {result.email}
          age = {result.dob.age}
        />
        )
      })}
    </div>
  )
}
