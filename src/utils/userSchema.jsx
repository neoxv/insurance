import * as Yup from "yup";

export const userSchema = Yup.object().shape( {
  referredBy: Yup.string().required("Enter a value for this field."),
  firstName: Yup.string().required("Enter a value for this field."),
  lastName: Yup.string().required( "Enter a value for this field." ),
  nameOnSsnCard:  Yup.string().required('Select an option'),
  address: Yup.string().required( "Enter a value for this field." ),
  city: Yup.string().required( "Enter a value for this field." ),
  state: Yup.string().required( "Enter a value for this field." ),
  zip: Yup.string().required( "Enter a value for this field." ),
  phone:Yup.string().required("Enter a value for this field."),
  email: Yup.string().email( "Invalid email" ),
  ssn: Yup.string().required( "Enter a value for this field." ),
  dob: Yup.string().required("Date of birth is required"),
  gender: Yup.string().required( "Enter a value for this field." ),
  monthlyIncome: Yup.string().required( "Enter a value for this field." ),
  isSubmittingToMarketplace:Yup.boolean().isTrue("Select this option."),
  hasNoCoverageEnrollment: Yup.boolean().isTrue( "Select this option." ),
  PreferToBeContacted:Yup.string().required("Enter a value for this field."),
  citizenship: Yup.string().required( "Enter a value for this field." ),
  signature: Yup.string().required( "Enter a value for this field." ),
  
  readTermsAndConditions: Yup.boolean().isTrue( "  You must accept the terms and conditions." ),
 

});

