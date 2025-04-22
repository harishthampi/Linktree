'use client'
import { signIn } from 'next-auth/react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Login() {
    return(
        <div className="max-w-xs mx-auto text-center p-4">
            <h1 className="text-3xl font-bold mb-2 ">Sign In</h1>
            <h2 className="text-sm text-gray-500 mb-4">Sign in to your account using one of the <br/>methods below</h2>

            <button className="bg-blue-500 w-full py-4 text-white flex gap-2 justify-center"
            onClick={() => signIn('google')}>
                <FontAwesomeIcon className='w-6' icon={faGoogle} />
                <span>Sign In with Google</span>
                </button>
        </div>
    )
}