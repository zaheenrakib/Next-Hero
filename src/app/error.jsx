"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link href="/" passHref>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                    Go back to Home
                </button>
            </Link>
        </div>
    )
}

export default error