import FormSignUp from "./FormSignUp"
import './Form.css';
// import { useState } from "react";
// import FormSuccess from "./FormSuccess";
const Form = () => {
    // const [isSubmitted,setIsSubmitted]=useState(false)
    // function submitForm(){
    //     setIsSubmitted(true)
    // }
  return (
    <>
    <div className='form-container'>
      <FormSignUp/>
        {/* <span className="close-btn">x</span>
        <div className="form-content-left">
            <img src="img/img-2.svg" className="form-img" alt="spaceship" />
        </div>
        {!isSubmitted ?(<FormSignUp submitForm={submitForm}/>):(<FormSuccess/>)} */}
    </div>
    </>
  )
}

export default Form