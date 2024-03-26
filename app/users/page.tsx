import React from 'react'

interface User{
  id:number;
  name:string;  
}

const UsersPage = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}})every 10 seconds it will rerun
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'})//every request render Dynamic rendering,default is cached store so static rendering
  const users : User[] = await res.json();
  return (
    <>
    <h1>Users</h1> 
    <p>{new Date().toString()}</p>
    <ul>
      {users.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage