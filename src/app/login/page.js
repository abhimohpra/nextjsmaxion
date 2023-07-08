"use client"
import { useState } from 'react'
import LandingImg from '../landingimg/page';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [ShowResetPass, setShowResetPass] = useState(false);
    const router = useRouter();

   function showResetPassword() {
        console.log("reached" + ShowResetPass)
        setShowResetPass(!ShowResetPass);
    } 

    return (
        <div className='w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2'>

            {/* page 1 */}

            <LandingImg />

            {/* page 2 */}
            <div className='w-full h-full break-all  centered md:h-screen text-left 
             hover:max-h-screen'>
                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 border-2 
                border-dotted rounded-md p-3'>


                    <form className="space-y-6" action="/" method="POST">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <a href="/signup"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        New joining? Click here to onboard!
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/*  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label> */}
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    pattern="[a-z0-9]{1,15}"
                                    placeholder="Enter password"
                                    title="Password should be digits (0 to 9) or alphabets (a to z)."
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                name="signIn"
                                id='signIn'
                                className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                            <div className="text-sm">
                                <a href="#"
                                    onClick={showResetPassword}
                                    className='font-semibold text-indigo-600 hover:text-indigo-500'
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </form>

                    <form className="space-y-6" action="#" method="POST" style={{ display: ShowResetPass ? "block" : "none" }}>
                        <div>

                            <div className="mt-2">
                                <input
                                    id="emailResetPass"
                                    name="email"
                                    type="email"
                                    placeholder="Enter registered email to reset password"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                name="resetPassBtn"
                                id='resetPassBtn'
                                className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Reset Password
                            </button>

                        </div>
                    </form>



              {/*       <form className="space-y-6" action="#" method="POST">
                        <div>
                            <div className="mt-2">
                                <input
                                    id="emailId"
                                    name="emailId"
                                    type="email"
                                    placeholder="Enter Email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    id="passwordNew"
                                    name="passwordNew"
                                    type="password"
                                    autoComplete="current-password"
                                    pattern="[a-z0-9]{1,15}"
                                    placeholder="Enter password"
                                    title="Password should be digits (0 to 9) or alphabets (a to z)."
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mt-2">
                                <input
                                    id="passwordNewR"
                                    name="passwordNewR"
                                    type="password"
                                    autoComplete="current-password"
                                    pattern="[a-z0-9]{1,15}"
                                    placeholder="Repeat password"
                                    title="Password should be digits (0 to 9) or alphabets (a to z)."
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                name="signUp"
                                id='signUp'
                                className="flex rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>

                        </div>
                    </form> */}



                </div>
            </div>
        </div>

    );
}
