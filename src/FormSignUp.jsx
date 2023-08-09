import useForm from "./useForm";
import validate from "./Validateinfo";
import "./Form.css";
const FormSignUp = ({ submitForm }) => {
  const {
    handleChange,
    values,
    handleSubmit,
    isBlur,
    isFocus,
    isValid,
    blurHandler,
    focusHandler,
    errors,
  } = useForm(validate, submitForm);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today!</h1>
        <div className="form-inputs">
          <label htmlFor="firstname" className="form-lable">
            firstname
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className={`input ${isBlur && !isValid ? "error" : ""} ${
              isBlur && isValid ? "success" : ""
            }`}
            placeholder="Enter your firstname"
            value={values.firstname}
            onChange={handleChange}
            onBlur={blurHandler}
            onFocus={focusHandler}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastname" className="form-lable">
            lastname
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className={`input ${isBlur && !isValid ? "error" : ""} ${
              isBlur && isValid ? "success" : ""
            }`}
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}{" "}
        </div>
        <div className="form-inputs">
          <label htmlFor="age" className="form-lable">
            age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="form-input"
            placeholder="Enter your age"
            value={values.age}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}{" "}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-lable">
            phone
          </label>
          <input
            type="number"
            id="phone"
            name="phone"
            className="form-input"
            placeholder="Enter your phone"
            value={values.phone}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}{" "}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-lable">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}{" "}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-lable">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">The name you entered is not valid</p>
          )}
          {isBlur && isValid && (
            <p className="success">The name you entered looks good</p>
          )}{" "}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-lable">
            confrim password
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            className="form-input"
            placeholder="Enter your confrim password"
            value={values.password2}
            onChange={handleChange}
          />
          {isBlur && !isValid && (
            <p className="error">
              {errors.password2 && <p>{errors.password2}</p>}
            </p>
          )}
          {isBlur && isValid && (
            <p className="success">The password you entered looks good</p>
          )}
        </div>
        <button className="form-input-btn"> Sign up</button>
      </form>
    </div>
  );
};

export default FormSignUp;
