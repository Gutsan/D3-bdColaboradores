
export const filterList = (listToFilter, filtro) => {

    const filteredList = listToFilter.filter(item =>{

        const itemFiltrado=item.id.toLowerCase().includes(filtro.toLowerCase())||
        item.nombre.toLowerCase().includes(filtro.toLowerCase())||
        item.correo.toLowerCase().includes(filtro.toLowerCase())||
        item.edad.toLowerCase().includes(filtro.toLowerCase())||
        item.cargo.toLowerCase().includes(filtro.toLowerCase())||
        item.telefono.toLowerCase().includes(filtro.toLowerCase())
    return itemFiltrado}
    )

    return (filteredList)

}