import { useState, useEffect } from "react";

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    age: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  // Handling input onFocus event
  const focusHandler = (event) => {
    setIsFocus(true);
    setIsBlur(false);

    // Do something with event
    console.log(event);
  };

  // Handling input onBlur event
  const blurHandler = (event) => {
    setIsFocus(false);
    setIsBlur(true);
    // Validate entered name
    if (values.match(/^[a-z][a-z\s]*$/i)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    // Do something with event
    console.log(event);
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange,isBlur,isFocus,isValid,blurHandler,focusHandler, values, handleSubmit, errors };
};
export default useForm;
