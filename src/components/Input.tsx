import { useState } from "react";
import "../css/Input.css";

function Input(props: IInputProps) {
  let phoneNumber: string;
  let [errorMessage, setErrorMessage] = useState("");
  const phoneSymbols: { [key: number]: string } = {
    0: "(",
    2: ")",
    3: " ",
    7: "-",
  };
  //([\D\s]+)\w+
  const formatPhoneNumber = (e: string) => {
    let formattedPhone: string = "";
    for (let key in phoneSymbols) {
      e = e.replace(phoneSymbols[key], "");
    }
    let match = e.match(/([\D\s]+)/g);
    if (match !== null) setErrorMessage((old) => (old = "eoq"));
    else setErrorMessage((old) => (old = ""));

    for (let index = 0; index < e.length; index++) {
      if (phoneSymbols[index] !== undefined)
        formattedPhone += phoneSymbols[index];
      formattedPhone += e[index];
    }
    console.log(formattedPhone);
    return [formattedPhone, errorMessage];
  };
  return (
    <div>
      <div className="input-block">
        <input
          maxLength={props.maxLength}
          onChange={
            props.isPhone
              ? (e) => {
                  [phoneNumber, errorMessage] = formatPhoneNumber(
                    e.target.value
                  );
                  e.target.value = phoneNumber;
                  e.currentTarget.innerHTML = "ds";
                }
              : (e) => {
                  e.target.value;
                }
          }
          type={props.isPassword ? "password" : "text"}
          name="input-text"
          id="input-text"
          required={props.required}
          spellCheck="false"
        />
        <span className="placeholder">{props.placeholder}</span>
      </div>
      <small>{errorMessage}</small>
    </div>
  );
}

export default Input;
