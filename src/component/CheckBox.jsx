import React from 'react'

const CheckBox = ( { show,label,required,error ,name,value,onBlur,onChange} ) => {

  return (
    <div className={ `${ show && "hidden" }` }>
      <div className="flex items-start gap-2 text-Secondary-300 mb-4 font-Nunito">
        <input id="default-checkbox" type="checkbox"
          checked={ value }
          name={ name }
          onChange={onChange}
          onBlur={onBlur}
          className="w-5 h-5 accent-orange-600 border-2 " />
        <label htmlFor="default-checkbox" className="font-bold text-sm md:text-base">{ label } { required && <span className="text-Primary-100 font-semibold">*</span> }</label>
      </div>
      <p className={ `transition-all duration-300 font-semibold  text-[13px] text-Primary-100 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    </div>
    
  )
}

export default CheckBox
