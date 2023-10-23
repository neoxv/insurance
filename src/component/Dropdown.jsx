import React, { useState } from "react";

const Dropdown = ({ label, id, data, onChange, error,required,header }) => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleChange = (name) => {
    setSelected( name );
    
    onChange(name);
  };
 

  return (
    <>
      <div className="flex flex-col gap-1.5">

      { header &&
      <p
      
      htmlFor={id}
      className="text-sm md:text-base font-bold font-Nunito text-Secondary-300"
      >
        {header} {required && <span className="text-Primary-100 font-semibold">*</span>}
      </p>
      }
      <button
        onClick={() => setShowList((prev) => !prev)}
        onBlur={() => setShowList(false)}
        id={id}
        data-dropdown-toggle="dropdown"
        className={`${ error ? "border-Primary-100 ": " border-gray-300"}text-Secondary-200 font-Nunito sm:w-1/2 w-full bg-white border focus:outline-none rounded-sm text-sm px-4 py-2 text-center flex items-center justify-between relative gap-2 capitalize group`}
        type="button"
      >
        {selected}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
        <div
          id="dropdown"
          className={`z-[1000]  absolute top-full left-0 bg-white py-2 font-Nunito rounded shadow w-full ${
            showList ? " visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <ul
            className=" text-sm text-left max-h-[10rem] overflow-y-auto"
            aria-labelledby="dropdownDefaultButton"
            >
            {data.map(({ name }, idx) => {
              return (
                <li key={idx} onClick={() => handleChange(name)}>
                  <p className="block  border-b border-Tertiary-100 px-4 py-1.5 hover:bg-blue-500 hover:text-white">
                    {name}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
    
      </button>
            <p className={ `transition-all duration-300 font-semibold  text-[13px] text-Primary-100 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    

              </div>
    </>
  );
};

export default Dropdown;
