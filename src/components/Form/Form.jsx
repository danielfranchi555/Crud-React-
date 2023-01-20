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
    <div className=" mt-3  mb-4 " style={{ alignItems: "center" }}>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="title bg-dark">
             {dataToEdit?<h1 className="titleEdit">Edit user</h1>:<h1 className="titleEdit">Add user</h1>}
        </div>
        <div className=" inputs">
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={form.name}
            className="text-center form-control "
            style={{ width: "400px" }}
          />
        </div>

        <div className="inputs">
          <input
            type="text"
            name="username"
            placeholder="surname"
            onChange={handleChange}
            className=" text-center form-control  "
            style={{ width: "400px" }}
            value={form.username}
          />
        </div>

        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            className="text-center form-control  "
            value={form.email}
            style={{ width: "400px" }}
          />
        </div>

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
