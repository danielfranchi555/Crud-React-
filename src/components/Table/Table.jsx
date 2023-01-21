import React from 'react'
import './Table.scss'

export const Table = ({db,loading,deleteData,setdataToEdit}) => {
     if(loading){
        return <h1 style={{color:'white'}}>Loading...</h1>
    } 
  return (
    <div className='containerTable'>
        <table class="table table-dark">
  <thead>
    <tr>
     <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {db.map((user)=>(
   <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className='d-flex' style={{flexDirection:'column'}} >
      <div className='py-2'>
        <button className='btn btn-success'onClick={()=>setdataToEdit(user)}>editar</button>
      </div>
      <div className=''>
      <button className='btn btn-danger' onClick={()=>deleteData(user.id)}>delete</button>
      </div>
      </td>
    </tr> 
    ))}
  

  </tbody>
</table>
    </div>
  )
}

