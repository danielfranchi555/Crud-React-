import React from "react";
import { useState, useEffect } from "react";
import { Form } from "../Form/Form";
import { Table } from "../Table/Table";
import uuid from "react-uuid";

export const CrudApp = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  const getApi = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const resp = await data.json();
    setDb(resp);
    setLoading(false);
  };

  const id = uuid();

  useEffect(() => {
    getApi();
  }, []);

  /* FUNCION PARA OBTENER LOS DATOS DEL 'FORM'*/
  const createData = (data) => {
    data.id = Date.now();
    if (!data.name || !data.username || !data.email) {
      alert("ingresa todos los campos");
    } else setDb([...db, data]);
  };


  const updateData = (data) => {
    const newData = db.map((user)=>user.id ===  data.id ?data :user)
    setDb(newData)
  };


  /*     FUNCION PARA ELIMINAR USUARIOS DE LA TABLE*/
  const deleteData = (id) => {
    setDb(db.filter((usuario) => usuario.id != id));
  };


  return (
    <div className=" text-center d-flex" style={{flexDirection:'column',alignItems:'center'}}>

{/*SI HAY DATOS EN dataToEdit QUE MUESTRE ' EDIT USER', Y SI NO QUE MUESTRE 'ADD USER'*/}
 <div>
     <Form
        db={db}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
        createData={createData}
        updateData={updateData}
      />
 </div>
   <div className="" style={{width:'90%'}} >
      <Table
        db={db}
        deleteData={deleteData}
        setdataToEdit={setdataToEdit}
        loading={loading}
      />
   </div>
    
    </div>
  );
};
