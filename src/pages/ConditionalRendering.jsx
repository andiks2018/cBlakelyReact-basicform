import React from "react";
import { useState } from "react";
import Layout from '../components/Layout'

export default function ConditionalRendering (){
    const [loading, setLoading]=useState(true)
    const[modal, setModal]=useState(false)
    const [modalImage, setModalImage]=useState({
        show : false,
        src : ''
    })

    //LOADING----------------------------------
    setTimeout(()=>{
        setLoading()
    }, 2000);
    
    if(loading){
        return (
            <h1>loading...</h1>
        )
    }
    //SELESAI LOADING ---------------------------


    // MODAL ------------------------------------
    const handleModal = ()=>{
        setModal(!modal)
    }
    // SELESAI MODAL-----------------------------


    //MODALIMAGE---------------------------------
    const handleImage = (e)=>{
        setModalImage({
            show : true,
            src : e.target.src
        })
    }
    //SELESAI MODALIMAGE-------------------------
    return (
        <Layout>
        <div className="space-y-2">
            {modal&& (
                <div>
                    <h1>Hello Modal selamat datang kembali</h1>
                    <button 
                    className="bg-orange-500 px-6 py-1 rounded-xl"
                    onClick={handleModal}>Close modal</button>
                </div>
            )}

            {modalImage.show && (
                <div>
                    <img src={modalImage.src} alt="test" />
                    <button className="bg-orange-500 px-6 py-1 rounded-xl" onClick={()=>{
                        setModalImage({
                            show : false,
                            src : ''
                        })
                    }}>Close image</button>
                </div>
            )}


            
            <h1>Halaman Conditonal Rendering</h1>
            <h3>Hello react App</h3>
            <button 
            onClick={handleModal}
            className="bg-blue-500 text-white px-6 py-1 rounded-xl">
                Open modal
            </button>
            <img src="https://picsum.photos/seed/picsum/200/200" 
            alt="" onClick={handleImage} />
            <img src="https://picsum.photos/seed/picsum1/200/200" 
            alt=""  onClick={handleImage} />
            <img src="https://picsum.photos/seed/picsum2/200/200" 
            alt=""  onClick={handleImage}  />
        </div>
        </Layout>
    )
}