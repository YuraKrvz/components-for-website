import {useState, useEffect} from 'react'

// This code introduces two types of validation. 
// In the first case, we specify the error text and its boolean type in the state object. 
// In the second case, only boolean type

const useValidation = (stateInput, validations) => {
   const [mainValid, setMainValid] = useState(false);
   const [isEmpty, setIsEmpty] = useState({text: 'input is empty', status: true});
   const [minLengthError, setMinLengthError] = useState({text: 'few lines', status: false});
   const [maxLengthError, setMaxLengthError] = useState(false);
   const [emailError, setEmailError] = useState(false);

   useEffect(()=>{
      for(const validation in validations){
         switch(validation){
            case 'isEmpty': 
            stateInput ? setIsEmpty({...isEmpty, status: false}) : setIsEmpty({...isEmpty, status: true});
               break;
            case 'minLength': 
               stateInput.length < validations[validation] ? 
               setMinLengthError({...minLengthError, status: true}) 
               : setMinLengthError({...minLengthError, status: false});
               break;
            case 'maxLength':
               stateInput.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
               break;
            case 'isEmail':
               const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               re.test(String(stateInput).toLowerCase()) ? setEmailError(false) : setEmailError(true);
               break;
         }
      }

   },[stateInput]);
   useEffect(()=>{
      if(isEmpty.status || minLengthError.status || maxLengthError.status || emailError.status){
         setMainValid(false);
      } else {
         setMainValid(true);
      }
   },[isEmpty, minLengthError, maxLengthError, emailError])

   return {mainValid, isEmpty, minLengthError, maxLengthError, emailError}; 
}

export default useValidation;