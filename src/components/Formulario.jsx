/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Formulario({
  setAlert,
  setColor,
  exito,
  camposVacios,
  emailIncorrecto,
  contraseñasIncorrectas,
  contraseñaCorta,
  colorError,
  colorExito,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let alert = [];
    let color = "";

    if (name == "" || email == "" || password == "" || password2 == "") {
      alert.push(<li>{camposVacios}</li>);
      color = `${colorError}`;
    } else {
      if (password.length < 8) {
        alert.push(<li>{contraseñaCorta}</li>);
        color = `${colorError}`;
      }
      if (password != password2) {
        alert.push(<li>{contraseñasIncorrectas}</li>);
        color = `${colorError}`;
      }
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) == false) {
        alert.push(<li>{emailIncorrecto}</li>);
        color = `${colorError}`;
      }
      if (alert == "") {
        alert.push(<li>{exito}</li>);
        color = `${colorExito}`;
      }
    }

    console.log(alert);
    setAlert(alert);
    setColor(color);
  }

  return (
    <>
      <Form
        className="d-flex flex-column gap-3"
        style={{ width: "100%" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="tuemail@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          onChange={(e) => setPassword2(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </Form>
    </>
  );
}

export default Formulario;
