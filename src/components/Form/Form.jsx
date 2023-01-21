import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Form.scss";

export const Form = ({ createData, updateData, dataToEdit, setdataToEdit }) => {
  /* CREO EL ESTADO CON UN OBJETO DONDE GUARDO LOS DATOS INGRESADOS*/

  const initialForm = {
    id: null,
    name: "",
    username: "",
    email: "",
  };
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setdataToEdit(null);
  };

  return (
      <div className="containerForm">
         <form className="formContainer" onSubmit={handleSubmit}>
          <h1 className="text-center">{dataToEdit?'Edit user':'Add user'}</h1>
        <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={form.name}
            className="field"
          />
      

          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            className=" field"
            value={form.email}
           
          />

        <div className="divInputsBottom">
          <div className="inputSubmit">
            {" "}
            <input type="submit"
            className="btn btn-primary"
            />
          </div>
          <div className="inputSubmit">
            {" "}
            <input className="btn btn-dark" type="reset" onClick={handleReset} />
          </div>
        </div>
      </form>
      </div>
     
    
  );
};
