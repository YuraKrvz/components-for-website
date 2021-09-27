import {useState} from 'react'
import useValidation from './useValidation';

const useInput = (initialValue, validations) => {
   const [value, setValue] = useState(initialValue);
   const [isOut, setIsOut] = useState(false);
   const valid = useValidation(value, validations)

   const onChange = e => setValue(e.target.value);
   const onBlur = e => setIsOut(true);


   return {
      value,
      onChange,
      onBlur,
      isOut,
      ...valid,

   }
}

export default useInput;
