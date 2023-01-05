import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-orange-500 shadow uppercase'>
        <div className='flex justify-between p-5'>
            <h1>Link Belajar</h1>
            <div className='flex gap-4'>
                <Link to={'/'}>Home</Link>
                <Link to={'/cond'}>Conditional Rendering</Link>
                <Link to={'/fetch'}>Fetchin Data</Link>
                <Link to={'/form'}>Form</Link>
                <Link to={'/hapus'}>Hapus</Link>
                <Link to={'/hapus2'}>happus 2</Link>
                <Link to={'/props'}>Props</Link>
                <Link to={'/router'}>Router</Link>
            </div>
        </div>
    </nav>
  )
}
