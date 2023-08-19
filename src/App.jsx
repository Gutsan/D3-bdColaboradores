import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BaseColaboradores } from './assets/BD_Colaboradores'
import { Listado } from './assets/components/Listado'
import { Formulario } from './assets/components/Formulario'
import { InputSearch } from './assets/components/InputSearch'
import { filterList } from './assets/logic/filterList'
function App() {
const [Collaborators, setCollaborators]=useState(BaseColaboradores )
const [Alerta, setAlerta] = useState({
  type: "",
  msg: "",
  visible: false,
});
const [Search, SetSearch]=useState("")

return (
  <>
    <InputSearch SetSearch={SetSearch}/>
    <div className='main'>
      <Listado Collaborators={filterList(Collaborators,Search)}/>
      <Formulario Alerta={Alerta} setAlerta={setAlerta} Collaborators={Collaborators} setCollaborators={setCollaborators} />
      <p>{Search}</p>
    </div>
  </>
  )
}

export default App
