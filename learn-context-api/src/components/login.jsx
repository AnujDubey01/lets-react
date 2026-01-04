import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        setUser({username, password})
    }
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
      Login
    </h2>
    <form onSubmit={handleSubmit}>
    <input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Username"
  className="
    w-full mb-4 px-4 py-2 
    border rounded-lg 
    bg-white text-gray-900 
    placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-indigo-500
  "
/>

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="
    w-full mb-6 px-4 py-2 
    border rounded-lg 
    bg-white text-gray-900 
    placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-indigo-500
  "
/>


    <button
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition duration-300"
        >
      Submit
    </button>
    </form>
  </div>
</div>
    
  )
}

export default Login