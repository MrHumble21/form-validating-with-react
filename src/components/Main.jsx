import React, { useState } from "react";

function Main() {
  const [Value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState("");
  const usernameHandler = (e) => {
    setValue(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    if (Value.length === 0 && password.length === 0) {
      setValidation("please enter your password and username");
    } 
    else if(( Value === 'Abdulboriy' && password === '123') || ( Value === 'abdulboriy' && password === '123')  ){
        setValidation("User Validated")
    }
  };
  return (
    <form>
      <div className="conatiner">
        <h2 className="text-center">{validation.toLocaleUpperCase()}</h2>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="username"
          className="form-control"
          value={Value}
          onChange={usernameHandler}
          aria-label="Text input with checkbox"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="password"
          onChange={passwordHandler}
          aria-label="Text input with checkbox"
        />
      </div>
      <button onClick={submitHandler}>Check</button>
    </form>
  );
}

export default Main;
