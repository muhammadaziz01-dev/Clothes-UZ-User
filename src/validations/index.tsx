import * as Yup from "yup";


   // Validation scheme Login  for the input field type ------------------------------
   export const schemaLogin = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must contain at least one uppercase, one lowercase letter, one number, one special character, and be between 8 to 20 characters long"
      ).required("Password is required")
  });
  //==========================================



  // -----> Worker add <----------------------------------------
export const validationSchemaRegister = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  first_name: Yup.string().required("First Name is required"),
  last_name: Yup.string().required("Last Name is required"),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
    "Password must contain at least one uppercase, one lowercase letter, one number, one special character, and be between 8 to 20 characters long"
  ).required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});



