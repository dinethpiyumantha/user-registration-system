import * as Yup from "yup";

/**
 * Registration form validation schema
 */
export default Yup.object({
  first_name: Yup.string()
    .max(15, "First Name must be 15 characters or less")
    .required("First Name is Required"),
  last_name: Yup.string()
    .max(15, "Second Name must be 15 characters or less")
    .required("Second Name is Required"),
  email: Yup.string().email("Must be a valid email address.").required("Required"),
  county_code: Yup.string()
    .matches(/^\+[0-9]{1,9}$/, "Country code must be numbers with '+'")
    .min(2, "Country code must be 2 characters or greater")
    .max(4, "Country code must be 4 characters or less")
    .required("Country code is Required"),
  local_number: Yup.string()
    .length(9, "Local number must be 9 numbers")
    .matches(/^[0-9]{1,9}$/, "Local Number must be 9 numbers")
    .required("Local Number is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one numeric digit")
    .matches(/[^a-zA-Z0-9]/, "Password may contain at least one special character")
    .required("Password is Required."),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});
