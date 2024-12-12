import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import SelectComponent from "./components/SelectComponent";
import CheckBoxComponent from "./components/CheckBoxComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import createUser from "../database/create";

const SignUp = () => {
  const navigate = useNavigate();
  const api = "http://localhost:3000/users";

  const validationSchema = yup.object({
    name: yup.string().required("Enter your name"),
    email: yup.string().email().required("Enter your email"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Enter your password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match!"),
    selectVal: yup.string().required("Please select country"),
    conditions: yup
      .boolean()
      .oneOf([true], "Please accept terms and conditions"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      selectVal: "",
      conditions: "false",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values))
      console.log(values);
      const name = values.name;
      const email = values.email;
      const password = values.password;
      const selectVal = values.selectVal;
      // create user logic form here
      createUser(name, email, password, selectVal);
      resetForm({ values: "" });
      navigate("/login");
    },
  });
  console.log(formik);
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="flex rounded-2xl h-[90vh]  gap-[90px] justify-center items-center pt-[80px] pr-[80px] pb-[80px] shadow-2xl  bg-white border border-gray-200 w-[85vw]">
          <img
            src="https://cdn.dribbble.com/userupload/16768469/file/original-42c31692783f9934ee93d55a80498d88.jpg?resize=1200x900&vertical=center"
            className="h-[90vh] w-[53vw] object-cover rounded-l-2xl"
          />

          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold mb-8 text-center">Sign Up</p>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-4 w-[21vw]"
              >
                {/* name */}
                <TextFieldComponent
                  name="name"
                  placeholder="Enter your name"
                  iconName="person"
                  value={formik.values.name}
                  // harek patak chahi handkechange call vairako huncha s lekhda text firld ma s dekhaucha formik le then sw lekhda pani handle change call vairako huncha  (name sanga link up)
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  type="text"
                  error={formik.touched.name && formik.errors.name}
                />

                {/* email */}
                <TextFieldComponent
                  name="email"
                  placeholder="Enter your email"
                  iconName="mail"
                  value={formik.values.email}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  type="text"
                  error={formik.touched.email && formik.errors.email}
                />

                {/* password */}
                <TextFieldComponent
                  name="password"
                  placeholder="Enter your password"
                  iconName="lock"
                  value={formik.values.password}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  type="password"
                  error={formik.touched.password && formik.errors.password}
                  // endIcon="visibility"
                />

                {/* reconfirm the password  */}
                <TextFieldComponent
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  iconName="lock"
                  value={formik.values.confirmPassword}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  type="password"
                  error={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                  // endIcon="visibility"
                />
                {/* select for countries */}
                <SelectComponent
                  option1="Nepal"
                  option2="India"
                  option3="USA"
                  selectId="country-select"
                  labelId="country-label"
                  labelText="Country"
                  value={formik.values.selectVal}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  name="selectVal"
                  error={formik.touched.selectVal && formik.errors.selectVal}
                />

                <CheckBoxComponent
                  name="conditions"
                  label="I Agree to the terms and conditions"
                  value={formik.values.conditions}
                  handleChange={formik.handleChange}
                  error={formik.touched.conditions && formik.errors.conditions}
                  handleBlur={formik.handleBlur}
                />
                <ButtonComponent name="Sign Up" type="submit" />
                <p className="text-center">
                  Already have an account?
                  <Link
                    className="font-bold"
                    to={"/login"}
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
