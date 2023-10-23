import React from "react";

const Input = ({
  type,
  label,
  id,
  value,
  placeHolder,
  error,
  handleChange,
  required,
  name,
  readOnly,
  disabled,
  onBlur,
}) => {
  return (
    <div className=" flex flex-col items-start gap-1.5 w-full group font-Nunito">
      { label ?
      <label
      htmlFor={id}
      className="text-sm md:text-base font-bold text-Secondary-300"
      >
        {label} {required && <span className="text-Primary-100 font-semibold">*</span>}
      </label>
      :null}
      <input
        disabled={disabled}
        required={required}
        type={type || "text"}
        name={name}
        value={value}
        readOnly={readOnly || false}
        id={id}
        onChange={(e) => handleChange(e)}
        onBlur={onBlur}
        className={ `${ error ? "border-Primary-100 border-[1px] " : "border-[1px]  border-gray-300" }  sm:w-1/2 w-full rounded-sm focus:outline-none focus:ring-0 px-3 py-1.5 placeholder:text-sm` }
        placeholder={placeHolder}
      />
     
      <p className={ `transition-all duration-300 font-semibold  text-[13px] text-Primary-100 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    
    </div>
  );
};

export default Input;
