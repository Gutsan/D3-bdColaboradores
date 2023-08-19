export const validateEmail=(inpEmail)=>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(inpEmail)
}

export const validateEmpty=(array) => array.every((element)=>element!=undefined&&element!=null&&element!="")