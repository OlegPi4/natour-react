const InputComponent = ({ veriable, type, name, onChangeValue }) => {
  return (
    <>
      <input
        id={name}
        className="form__input"
        type={type}
        placeholder={veriable}
        required="required"
        name={name}
        value={veriable || ""}
        onChange={(e) => onChangeValue(e)}
      />
    </>
  );
};

export default InputComponent;
