
export function InputSearch({SetSearch}){
    const handleChange=(e)=>{
        SetSearch(e.target.value)
    }
        return(
        <>
        <input type="search" id="buscador" placeholder="Buscar colaborador" onChange={handleChange}/> 
        </>
    )
}