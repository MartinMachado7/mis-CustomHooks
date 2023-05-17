import { useState } from "react";


export const useForm = ( initialForm = {} ) => {
  
    const [FormState, setFormState] = useState(initialForm );
    
      const onImputChage = ({target}) => {
          const { name, value } = target;
          setFormState({
            ...FormState,
            [name]: value,
          });
      } 
      const onReset = () =>{
        setFormState(initialForm);
     };
  
    return {
        ...FormState,
        FormState,
        onImputChage,
        onReset

  }
}
