"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
    const { data: session } = useSession()
    // if (session) {
    //     return <>
    //         Signed in as {session.user.email} <br />
    //         <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // }
    return (
        <nav className='bg-[#131826] text-white flex justify-between px-4 h-16 items-center'>
            <div className='logo font-bold text-lg flex items-center gap-2'>
                <img src="/soda.png" width={24} className='filter invert' alt="" />
                <span>GetMeALassi!</span></div>
            {/* <ul className='flex justify-between gap-6'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Sign Up</li>
                <li>Login</li>
            </ul> */}
            <div>
                {session && <Link href={"/dashboard"}>
                    <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard</button></Link>}
                {session &&<button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => {signOut()}}>Logout</button>}
                {!session && <Link href={"/login"}>
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button></Link>}
            </div>
        </nav>
    )
}

export default Navbar
