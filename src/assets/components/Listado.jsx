import Table from 'react-bootstrap/Table'

export const Listado=({Collaborators})=>{

    return(
        <>
        <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
            {
                Collaborators.map((Collab,index)=>(
                    <tr key={index}>
                    <td>{Collab.nombre}</td>
                    <td>{Collab.correo}</td>
                    <td>{Collab.edad}</td>
                    <td>{Collab.cargo}</td>
                    <td>{Collab.telefono}</td>
                  </tr>
                )
                )
            }
          </tbody> 
        </Table>
        </>
    )
}