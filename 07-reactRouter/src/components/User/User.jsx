import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-700 text-yellow-400 p-4 text-3xl text-center bold-'>User: {id}</div>
  )
}

export default User