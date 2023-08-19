
export const InputSearch=(SetSearch)=>{
    const handleChange=(e)=>{
        console.log(e.target.value)
        SetSearch(e.target.value)
    }
        return(
        <>
        <input type="search" id="buscador" onChange={handleChange}/> 
        </>
    )
}