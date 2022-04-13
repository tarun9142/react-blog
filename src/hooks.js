import { useState } from "react";
export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);
    const handleInput = (e)=>{
        setValue(e.target.value);
    }

    return{
        value,
        onChange: handleInput
    }
}