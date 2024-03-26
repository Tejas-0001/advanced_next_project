import React from 'react'

interface User{
  id:number;
  name:string;  
  email:string;
}

const UsersPage = async () => {
  //const res = await fetch('https://jsonplaceholder.typicode.com/users',{next:{revalidate:10}})every 10 seconds it will rerun
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{cache:'no-store'})//every request render Dynamic rendering,default is cached store so static rendering
  const users : User[] = await res.json();
  return (
    <>
    <h1>Users</h1> 
    <p>{new Date().toString()}</p>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users.map(item => <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
      </tr>
      )}
      </tbody>
      
    </table>
    </>
  )
}

export default UsersPage