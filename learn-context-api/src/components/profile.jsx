import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <p className="mt-4 text-center text-gray-600">
        Please login
      </p>
    );
  }

  return (
    <p className="mt-4 text-center text-green-600 font-semibold">
      Welcome {user.username}
    </p>
  );
}


export default Profile

