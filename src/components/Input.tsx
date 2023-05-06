import "../css/Input.css";

function Input(props: IInputProps) {
  return (
    <div className="input-block">
      <input
        type={props.isPassword ? "password" : "text"}
        name="input-text"
        id="input-text"
        required={props.required}
        spellCheck="false"
      />
      <span className="placeholder">{props.placeholder}</span>
    </div>
  );
}

export default Input;
