import React from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    
    console.log('GitHub component data:', data); // Debug log
    
    // Check if data exists and has the required properties
    if (!data) {
        return <div className='text-center m-4 p-4 text-3xl'>Loading...</div>
    }
    
    if (data.error) {
        return <div className='text-center m-4 p-4 text-3xl text-red-500'>Error: {data.error}</div>
    }

    return (
         <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <h2>GitHub Profile</h2>
            <p>Username: {data.login || 'N/A'}</p>
            <p>Followers: {data.followers || 0}</p>
            <p>Following: {data.following || 0}</p>
            <p>Public Repos: {data.public_repos || 0}</p>
            {data.avatar_url && (
                <img src={data.avatar_url} alt="GitHub Avatar" width={300} className="mx-auto mt-4 rounded-full" />
            )}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    try {
        console.log('Loader: Starting fetch...'); // Debug log
        const response = await fetch('https://api.github.com/users/AnujDubey01');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Loader: Data received:', data); // Debug log
        return data;
    } catch (error) {
        console.error('Loader error:', error);
        return { 
            error: `Failed to load GitHub data: ${error.message}`,
            followers: 0,
            avatar_url: null
        };
    }
}