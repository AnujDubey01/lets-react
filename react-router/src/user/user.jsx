import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <h1 className="text-4xl font-bold text-gray-900">User Profile</h1>
                <p className="mt-4 text-xl">User ID: {userid}</p>
            </div>
        </div>
    )
}

export default User