"use client"
import Link from 'next/link'
import LandingImg from './landingimg/page';


export default function NotFound() {


  return (
    <div className='w-screen h-screen grid grid-rows-2 text-black md:grid-cols-2'>

      {/* page 1 */}

       <LandingImg />

      {/* page 2 */}
      <div className='w-full h-full break-all centered md:h-screen text-left 
             hover:max-h-screen'>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6 border-2 
                border-dotted rounded-md p-3 text-lg font-mono hover:font-serif text-rose-500'>

          <h2>The requested page has not found.</h2>
          <p><Link href="/">Click here for Home page</Link></p>

        </div>
      </div>
    </div>

  );
}