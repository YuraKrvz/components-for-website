import React from 'react'  
import useInput from '../useInput/useInput';

const TestSectionFormUseInput = () => {
   const name = useInput('', {isEmpty: false, minLength: 2, minLength: 2,})
   const email = useInput('', {isEmpty: true, isEmail: true,})
   const password = useInput('', {isEmpty: true, minLengthError: 3})

   return (
      <div>
         <h4>test form</h4>
         <div>
            <input onChange={e => name.onChange(e)} value={name.value} onBlur={e => name.onBlur(e)} placeholder="name" />
            {(name.isOut && name.isEmpty.status) && <div>{name.isEmpty.text}</div>}
            {(name.isOut && name.minLengthError.status) && <div>{name.minLengthError.text}</div>}
            {(name.isOut && name.maxLengthError) && <div>maxLengthError</div>}
         </div>
         <div>
            <input onChange={e => email.onChange(e)} value={email.value} onBlur={e => email.onBlur(e)} placeholder="email" />
            {(email.isOut && email.isEmpty.status) && <div>{email.isEmpty.text}</div>}
            {(email.isOut && email.emailError) && <div>its not a email</div>}
         </div>
         <div>
            <input onChange={e => password.onChange(e)} value={password.value} onBlur={e => password.onBlur(e)} placeholder="pass" />
            {(password.isOut && password.isEmpty.status) && <div>{password.isEmpty.text}</div>}
         </div>
         <button disabled={!name.mainValid || !email.mainValid || !password.mainValid} onClick={()=> alert('CLICK')} >Add</button>
      </div>
   )
}

export default TestSectionFormUseInput;