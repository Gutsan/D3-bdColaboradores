export function InpFormnulario({index,type,placeHolder,id,modifyInput,value}){
    const handleChange=(e)=>modifyInput(index,e)
return(
    <input 
    type={type} 
    placeholder={placeHolder} 
    id={id} 
    onChange={handleChange} 
    value={value} />
)
}