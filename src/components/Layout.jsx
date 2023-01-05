import React from 'react'
import Navbar from './Navbar'


export default function Layout(props) {
  return (
    <main>
        <Navbar />
        <div className='mt-5'>
            {props.children}
        </div>
    </main>
  )
}
