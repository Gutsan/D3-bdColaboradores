import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './assets/BD_Colaboradores'
import { Listado } from './assets/components/Listado'
import { Formulario } from './assets/components/Formulario'
import { InputSearch } from './assets/components/InputSearch'
import { filterList } from './assets/logic/filterList'
import Button from "react-bootstrap/Button";
function App() {
const [Collaborators, setCollaborators]=useState(BaseColaboradores )
const [Alerta, setAlerta] = useState({
  type: "",
  msg: "",
  visible: false,
});
const [Search, SetSearch]=useState("")
const [formVisible, setFormVisible]=useState(false)
const showForm=()=>{
  setFormVisible(!formVisible)
  setAlerta({
    type: "",
    msg: "",
    visible: false,
  })
}
return (
  <>
    <header>
    <InputSearch SetSearch={SetSearch} />
    </header>
    <div className='hero'>
      <h1>Lista de Colaboradores</h1>
      <Button variant="outline-primary" onClick={showForm} >
        +
      </Button>
      <Formulario Alerta={Alerta} setAlerta={setAlerta} Collaborators={Collaborators} setCollaborators={setCollaborators} visible={formVisible} setFormVisible={setFormVisible}/>
    </div>
    <Listado Collaborators={filterList(Collaborators,Search)}/>
  </>
  )
}

export default App
