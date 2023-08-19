import { BaseColaboradores } from "../BD_Colaboradores"

export const saveNewCollab=(Collab,setCollaborators)=>{
    const newId=BaseColaboradores.length+1
    const newCollab={
        id: newId.toString(),
        nombre: Collab[0],
        correo: Collab[1],
        edad: Collab[2],
        cargo: Collab[3],
        telefono: Collab[4]
    }

BaseColaboradores.push(newCollab)
setCollaborators(BaseColaboradores)
}
