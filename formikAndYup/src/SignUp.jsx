import React from "react";
import ButtonComponent from "./components/ButtonComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import SelectComponent from "./components/SelectComponent";
import CheckBoxComponent from "./components/CheckBoxComponent";
import { useFormik } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Enter your name"),
    email: yup.string().email().required("Enter your email"),
    password: yup.string().min(8).required("Enter your password"),
    selectVal:yup.string().required("Please select country"),
    conditions:yup.boolean().oneOf([true],"Please accept terms and conditions"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      selectVal: "",
      conditions: "false",
    },
    validationSchema: validationSchema,
    onSubmit:values => {
      alert(JSON.stringify(values))
  }});
  console.log(formik);
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="flex rounded-2xl h-[90vh]  gap-[90px] justify-center items-center pt-[80px] pr-[80px] pb-[80px] shadow-2xl  bg-white">
          <img
            src="https://cdn.dribbble.com/users/1987152/screenshots/6337035/final_4x.png?resize=768x576&vertical=center"
            className="h-[90vh] w-[50vw] object-cover rounded-l-2xl"
          />

          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold mb-8 text-center">Sign Up</p>
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
                  error={formik.touched.name && formik.errors.name }
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
                  error={formik.touched.password && formik.errors.password }
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
                  error={ formik.touched.conditions && formik.errors.conditions}
                  handleBlur={formik.handleBlur}
                />
                <ButtonComponent name="Sign Up" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
