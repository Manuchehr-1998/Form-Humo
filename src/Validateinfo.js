export default function validateInfo(values){
    let errors={}
    if(!values.firstname.trim()){
        errors.firstname="Firstname required"
    }

    if(!values.lastname.trim()){
        errors.lastname="lastname required"
    }

    if(!values.age.trim()){
        errors.age="age required"
    }
    if(!values.phone.trim()){
        errors.phone="phone required"
    }
    

    // email
    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

       if(!values.password){
        errors.password="Password is required"
       }else if(values.password.length<6){
        errors.password="Password >number 6 required"
       }
      
       if(!values.password2){
        errors.password2="Password is required"
       }else if(values.password2!==values.password){
        errors.password2="Password do not match"
       }
       return errors
}