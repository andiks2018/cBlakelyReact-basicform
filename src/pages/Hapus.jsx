import React from "react";
import { useState } from "react";

export default function Hapus2(){

  const [nilai, setNilai]=useState(10)

  return (
    <div>
      <h1>Nilai {nilai}</h1>
      <div className="">
        <button className="bg-orange-500 px-6 " onClick={()=>{
          setNilai(nilai+1)
        }}>+</button>
        <button className="bg-blue-500 px-6 " onClick={()=>{
          setNilai(nilai-1)
        }}>-</button>
      </div>
    </div>
  )
}