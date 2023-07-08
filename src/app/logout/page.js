"use client"
import Link from 'next/link'
import LandingImg from '../landingimg/page';


export default function LogOut() {


  return (
    <div className='w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2'>

      {/* page 1 */}

       <LandingImg />

      {/* page 2 */}
      <div className='w-full h-full break-all centered md:h-screen text-left'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 border-2 
                border-dotted rounded-md p-3 text-lg font-mono'>

          <h2>You have been logged out!!</h2>
          <p><Link href="/login">Click to Re-login</Link></p>

        </div>
      </div>
    </div>

  );
}