/* eslint-disable react/prop-types */
import React from "react";
import { Alert } from "react-bootstrap";

function Alerta({ texto, color }) {
  if (texto == "") {
    return <></>;
  } else {
    return (
      <>
        <Alert className="text-start" variant={color}>
          <ul>{texto}</ul>
        </Alert>
      </>
    );
  }
}
export default Alerta;
