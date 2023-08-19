import {
  infoInput,
  msgDanger,
  msgEmail,
  msgSuccess,
} from "../Constants";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import { AlertMsg } from "./AlertMsg";
import { InpFormnulario } from "./InpFormulario";
import { validateEmail, validateEmpty } from "../logic/validateForm";
import { saveNewCollab } from "../logic/newCollab";

export function Formulario({ Alerta, setAlerta,setCollaborators}) {
  
  const [inputsValues, setInputValue] = useState(
    Array(infoInput.length).fill("")
  );

  const modifyInput = (index, inp) => {
    const newinputsValues = [...inputsValues];
    newinputsValues[index] = inp.target.value;
    setInputValue(newinputsValues);
  };

  const validarInput = (event) => {
    event.preventDefault()
    
    if (validateEmpty(inputsValues)) {
      if (validateEmail(inputsValues[1])) {
          saveNewCollab(inputsValues,setCollaborators)
          setInputValue(Array(infoInput.length).fill(""))
          setAlerta(msgSuccess);

      } else {
        setAlerta(msgEmail);
      }
    } else {
      setAlerta(msgDanger);
    }
  };

  return (
    <form className="formulario" onSubmit={validarInput}>
      <p>Ingrese datos de Colaborador</p>
      {infoInput.map((inp, index) => (
        <InpFormnulario
          key={index}
          index={index}
          type={inp.type}
          placeHolder={inp.placeHolder}
          id={inp.id}
          modifyInput={modifyInput}
          value={inputsValues[index]}
        />
      ))}
      <Button variant="primary" type="submit">
        Agregar
      </Button>
      <AlertMsg
        type={Alerta.type}
        message={Alerta.msg}
        visible={Alerta.visible}
      />
    </form>
  );
}