import React from "react";
import TextFieldComponent from "./components/TextFieldComponent";
import ButtonComponent from "./components/ButtonComponent";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="flex rounded-2xl h-[90vh]  gap-[90px] justify-center items-center pt-[80px] pl-[100px] pb-[80px] shadow-2xl  bg-white border border-gray-200 w-[85vw]">
          <div className="flex items-center justify-center ">
            <div>
              <p className="text-3xl font-bold mb-8 text-center">Welcome</p>
              <form className="flex flex-col gap-4 w-[21vw] justify-center ">
                {/* email */}
                <TextFieldComponent
                  name="email"
                  placeholder="Enter your email"
                  iconName="mail"
                  // value={formik.values.email}
                  // handleChange={formik.handleChange}
                  // handleBlur={formik.handleBlur}
                  type="text"
                  // error={formik.touched.email && formik.errors.email}
                />

                {/* password */}
                <TextFieldComponent
                  name="password"
                  placeholder="Enter your password"
                  iconName="lock"
                  
                  type="password"
                  // endIcon="visibility"
                />

                <ButtonComponent name="Log In" type="submit" />
              </form>
            </div>
          </div>
          <img
            src="https://cdn.dribbble.com/userupload/16834943/file/original-f5c8959760f5125529fdc38731ff9a17.jpg?resize=1200x900&vertical=center"
            className="h-[90vh] w-[52vw] object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
