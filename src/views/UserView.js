import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/userServices'
import UserCard from '../components/UserCard'

function UserView() {
  const [ state, setState ] = useState({
    users: []
  })

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    if (state.users.length <= 0) {
      const data = await getUsers()
      setState({
        ...state,
        users: data.users,
      })
    }
  }

  const renderUsers = () => {
      if (state.users.length > 0) {
          return state.users.map((user) => (<UserCard key={user._id} name={user.name} email={user.email} />))
      } else {
          return <h3>Loading users...</h3>
      }
  }

return(<div className='Users'>{renderUsers()}</div>)
}

export default UserView;
