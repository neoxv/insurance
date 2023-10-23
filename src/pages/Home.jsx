import {  useState } from "react";
import { useFormik } from "formik";
import {userSchema} from "../utils/userSchema"
import Logo from "../images/Logo.png"
import Button from "../component/Button";
import Input from "../component/Input"
import Dropdown from "../component/Dropdown"
import Radio from "../component/Radio";
import CheckBox from "../component/CheckBox";

const Home = () => {
  
  const [ suffix, setSuffix ] = useState( "" );
  const [state,setState ] = useState( "" );
  const [gender,setGender ] = useState( "" );
  const [tax,setTax] = useState( "" );
  const [contactMethod,setContactMethod] = useState( "" );
  const [citizenship,setCitizenship] = useState( "" );
  
  const initialValues = {
    _id: new Date().getTime(),
    referredBy: "",
    firstName: "",
    lastName: "",
    middleName: "",
    suffix: suffix,
    identityDocument: "",
    nameOnSsnCard: "",
    permanentAddress: false,
    address: "",
    city: "",
    state: state,
    zip: "",
    phone: "",
    email: "",
    ssn: "",
    dob: "",
    gender: gender,
    tobaccoUser: false,
    monthlyIncome: "",
    hasNoCoverageEnrollment: false,
    isSubmittingToMarketplace: false,
    taxFilingStatus: tax,
    citizenship: citizenship,
    PreferToBeContacted: contactMethod,
    signature: "",
    readTermsAndConditions: false
    
  }
  const handleSubmit = ( values ) => {
    formik.setTouched( {
      // to show error message for all the required input
      gender: true,
      isSubmittingToMarketplace: true,
      hasNoCoverageEnrollment: true,
      readTermsAndConditions: true,
      PreferToBeContacted:true,
      firstName: true,
      lastName: true,
      taxFilingStatus: true,
      referredBy: true,
      address: true,
      city: true,
      citizenship: true,
      monthlyIncome: true,
      nameOnSsnCard: true,
      signature:true,
      zip: true,
      state: true,
      ssn: true,
      phone: true,
      dob:true
      
    }
    )
    if ( formik.isValid ) {
      console.log( values );
    }
  }
  const formik = useFormik( {
    initialValues,
    validationSchema: userSchema,
    onSubmit: handleSubmit
    
  } );

  const { firstName, lastName } = formik.values;
  return (
    <div className="bg-Tertiary-100  flex items-center justify-center">
      <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto ">
        <img src={ Logo } alt="" />
        <div className="bg-white p-6  border-[1px] rounded border-dashed border-Primary-100 flex flex-col gap-7">
          <h1 className=" text-xl md:text-left text-center md:text-2xl font-Nunito text-Secondary-300">ACA Health Insurance Application</h1>
          <form onSubmit={ formik.handleSubmit } >
            <div className="flex flex-col  gap-8">

              <div className="flex flex-col">
                <Input
                  label="Who Referred you?"
                  required={ true }
                  name="referredBy"
                  value={ formik.values.referredBy }
                  error={ formik.touched.referredBy && formik.errors.referredBy }
                  onBlur={ formik.handleBlur }
                  handleChange={ formik.handleChange }
                  placeHolder=""
                />
                <p className="italic font-Nunito text-xs text-Secondary-400">This is the person helping you complete this application.</p>
              </div>
              <Input
                label="Name"
                required={ true }
                name="firstName"
                value={ formik.values.firstName }
                error={ formik.touched.firstName && formik.errors.firstName }
                onBlur={ formik.handleBlur }
                handleChange={ formik.handleChange }
                placeHolder="First Name"
                
              />
              <Input
                required={ false }
                name="middleName"
                value={ formik.values.middleName }
                onBlur={ formik.handleBlur }
                handleChange={ formik.handleChange }
                placeHolder="Middle Name (Optional)"
              />
              
              <Input
                required={ true }
                name="lastName"
                value={formik.values.lastName}
                error={formik.touched.lastName && formik.errors.lastName}
                onBlur={formik.handleBlur}
                handleChange={ formik.handleChange }
                placeHolder="Last Name"
              />
              <Dropdown
                label="Suffix (Optional)"
                data={ [
                  { name: "sr" },
                  { name: "jr" },
                  { name: "II" },
                  { name: "III" },
                  { name: "IV" },
                  { name: "V" },
                  { name: "VI" },
                ] }
                onChange={ setSuffix }
              />
              {/* File uploading */ }
              
              
              <Radio
                label={ `Is ${ firstName ? firstName : "_____ " } ${ lastName ? lastName : "_____ " }the name listed on your Social Security Card?` }
                error={ formik.touched.nameOnSsnCard && formik.errors.nameOnSsnCard }
                checked={ formik.values.nameOnSsnCard }
                onChange={ formik.handleChange }
                name="nameOnSsnCard"
                required={ true }
                
                />   
      
              <CheckBox
                label="Click here if ___ doesn't have a permanent address"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                name="permanentAddress"
                required={ false }
                show={ formik.values.nameOnSsnCard ==="no"}
              />
              
              <Input
                label="Address"
                required={true}
                name="address"
                value={formik.values.address}
                error={formik.touched.address && formik.errors.address}
                onBlur={formik.handleBlur}
                handleChange={ formik.handleChange }
                placeHolder="Physical Address"
              />

              <Input
                required={ true }
                name="city"
                value={ formik.values.city }
                onBlur={ formik.handleBlur }
                error={ formik.touched.city && formik.errors.city }
                handleChange={ formik.handleChange }
                placeHolder="City"
              />
              
              <Input
                
                required={ true }
                name="zip"
                value={ formik.values.zip }
                error={ formik.touched.zip && formik.errors.zip }
                onBlur={ formik.handleBlur }
                handleChange={ formik.handleChange }
                placeHolder="Zip"
              />
                
              <Dropdown
                label="State"
                data={ [
                  { name: "list of states" },
                  
                ] }
                required={ true }
                onChange={ setState }
                onBlur={ formik.handleBlur }
                error={ formik.touched.state && formik.errors.state }
                />
      
              <div className="flex flex-col">
                
                <Input
                  label="Phone"
                  required={ true }
                  name="phone"
                  type="tel"
                  value={ formik.values.phone }
                  onBlur={ formik.handleBlur }
                  error={ formik.touched.phone && formik.errors.phone }
                  handleChange={ formik.handleChange }
                  placeHolder="Phone "
                />
                <p className="italic font-Nunito text-xs text-Secondary-400"> A VALID phone number that belongs to the primary insured.</p>
              </div>

              <Input
                label="Email"
                required={ false }
                name="email"
                type='email'
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
                onBlur={formik.handleBlur}
                handleChange={ formik.handleChange }
                placeHolder="Don't use fake email address"
              />
              
              <Input
                label="Social Security Number"
                required={ true }
                name="ssn"
                value={ formik.values.ssn }
                error={ formik.touched.ssn && formik.errors.ssn }
                onBlur={ formik.handleBlur }
                handleChange={ formik.handleChange }
                placeHolder="Social Security Number"
              />
              
              <Input
                
                label="Date of Birth"
                required={ true }
                name="dob"
                type="date"
                value={ formik.values.dob }
                error={ formik.touched.dob && formik.errors.dob }
                onBlur={ formik.handleBlur }
                handleChange={ formik.handleChange }
                placeHolder=""
                />
                
              <Dropdown
                label="-Select-"
                header='Gender'
                  data={ [
                    { name: "Female" },
                    { name: "Male" },
                  ] }
                  required={ true }
                  onChange={ setGender }
                  onBlur={ formik.handleBlur }
                  error={ formik.touched.gender && formik.errors.gender }
                />
                

              <div className="flex flex-col ">
                  
                <CheckBox
                  label="Tobacco User"
                  onChange={ formik.handleChange }
                  onBlur={ formik.handleBlur }
                  name="tobaccoUser"
                  required={ false }
                  value={formik.values.tobaccoUser}
                  />
                  <p className="italic font-Nunito text-xs text-Secondary-400 -mt-3">Check this box if you have used tobacco four or more times a week in the past six months.</p>
                  </div>

              <div className="flex flex-col">
                <Input
                  label="Estimatic Mounthly Income"
                  required={true}
                  name="monthlyIncome"
                  value={formik.values.monthlyIncome}
                  error={formik.touched.monthlyIncome && formik.errors.monthlyIncome}
                  onBlur={formik.handleBlur}
                  handleChange={ formik.handleChange }
                  placeHolder=""
                  />
                  <p className="italic font-Nunito text-xs text-Secondary-400">The minimum income to qualify is $1,200 per month.</p>
              </div>
           
              <CheckBox
                label="I understand that this application is being submitted to the marketplace to obtain new health insurance coverage"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                name="isSubmittingToMarketplace"
                required={ true }
                value={formik.isSubmittingToMarketplace}
                error={formik.touched.isSubmittingToMarketplace&&formik.errors.isSubmittingToMarketplace}
              />
              
               <CheckBox
                label="I confirm I am not currently enrolled in Medicare, Medicaid, VA benefits, Employer, or Marketplace coverage."
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={formik.hasNoCoverageEnrollment}
                name="hasNoCoverageEnrollment"
                required={ true }
                error={formik.touched.hasNoCoverageEnrollment&&formik.errors.hasNoCoverageEnrollment}
              />

              <Dropdown
                
                label="-Select-"
                header='2023 Tax Filing Status '
                data={ [
                  { name: "i file my taxes as indiviual" },
                  { name: "i file taxes spouse and/or children" },
                    // another form don't file as inviduals
                  ] }
                  required={ true }
                  onChange={ setTax}
                  onBlur={ formik.handleBlur }
                  error={ formik.touched.gender && formik.errors.gender }
              />
              
              <Dropdown
                label="-Select-"
                header='Citizenship '
                data={ [
                  { name: "Us Citizen" },
                  { name: "Legally Present (i.e Green card, Visa, etc" },
                    // another form if they are not us citizen
                  ] }
                required={ true }
                onChange={ setCitizenship}
                onBlur={ formik.handleBlur }
                error={ formik.touched.gender && formik.errors.gender }
              />
              
              <Dropdown
                label="-Select-"
                header='How Do you Prefer to Be Contacted About This Application? '
                data={ [
                  { name: "phone call" },
                  { name: "Text" },
                  { name: "Email" },
                  // another form if they are not us citizen
                ] }
                required={ true }
                onChange={ setContactMethod}
                onBlur={ formik.handleBlur }
                error={ formik.touched.PreferToBeContacted && formik.errors.PreferToBeContacted }
              />
              
              <div className="flex flex-col">
                <Input
                  label="Signiture"
                  required={true}
                  name="signature"
                  value={formik.values.signature}
                  error={formik.touched.signature && formik.errors.signature}
                  onBlur={formik.handleBlur}
                  handleChange={ formik.handleChange }
                  placeHolder=""
                />
                <p className="italic font-Nunito text-xs text-Secondary-400"> Type your full name above to sign electronically.</p>
              </div>
              
              <CheckBox
                
                label={
                  <>
                    I have read and agree to the { " " }
                    <a className="text-blue-900" href="https://sign.zoho.com/signform?form_link=234b4d535f49562313a9b982cecc3689ea47da87e6b27f8f47490c45e257dde9fdffeb183d8d3d3e01d9f140fccd32e67102b48ddc3c7e20ecb5ae3ace106c3d45686f7e99070046#">terms and conditions</a>
                  </>
                }
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={formik.readTermsAndConditions}
                name="readTermsAndConditions"
                required={ true }
                error={formik.touched.readTermsAndConditions&&formik.errors.readTermsAndConditions}
                  />
              <Button
                type="submit"
                handleClick={ handleSubmit }
                custom="bg-blue-500 w-full text-white py-3">
                Submit
              </Button> 
              
            </div>

          </form>

        </div>
      </div>
    </div>

  )
}

export default Home
