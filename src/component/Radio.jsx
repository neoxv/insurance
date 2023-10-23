import React from 'react'

const Radio = ({checked,onChange,error,required,label}) => {

  return (
    <div className="">
  <label className=' font-Nunito text-Secondary-300 text-sm md:text-base'>{label} {required && <span className="text-Primary-100 font-semibold">*</span>} </label>
      <div className=' flex gap-8 font-Nunito'>
        
      <div className='flex gap-2'>
           <input
            type="radio"
            id="yes"
            name="nameOnSsnCard"
            value="yes"
            required={ required }
            checked={ checked === 'yes' }
            onChange={ onChange }
          />
          <label htmlFor="yes">Yes</label>
        </div>
        
      
        <div className="flex gap-2 ">
          
          <input
            
            type="radio"
            
            id="no"
            
            name="nameOnSsnCard"
            
            value="no"
            
            checked={ checked === 'no' }
            
            onChange={ onChange }

            required={ required }
            
          />
          
        <label htmlFor="no">No</label>
      </div>
         
              {/* Error message */ }
    
          </div>
      <p className={ `transition-all duration-300 font-Nunito font-semibold  text-[13px] text-Primary-100 ${ error ? "translate-y-0 " : "-z-10 opacity-0 -translate-y-1/2" }` }>{ error }</p>
    </div>
  )
 
}

export default Radio
