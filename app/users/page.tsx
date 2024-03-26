import React from 'react'

interface User{
  id:number;
  name:string;  
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users : User[] = await res.json();
  return (
    <>
    <h1>Users</h1> 
    <ul>
      {users.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage