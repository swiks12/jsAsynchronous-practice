import React from "react";
import TextFieldComponent from "./components/TextFieldComponent";
import ButtonComponent from "./components/ButtonComponent";

const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-gray-100">
        <div className="flex rounded-2xl h-[90vh]  gap-[90px] justify-center items-center pt-[80px] pl-[80px] pb-[80px] shadow-2xl  bg-white">
          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold mb-8 text-center">Welcome</p>
              <form className="flex flex-col gap-4">
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
                  // value={formik.values.password}
                  // handleChange={formik.handleChange}
                  // handleBlur={formik.handleBlur}
                  type="password"
                  // error={formik.touched.password && formik.errors.password}
                />

                <ButtonComponent name="Log In" type="submit" />
              </form>
            </div>
          </div>
          <img
            src="https://cdn.dribbble.com/userupload/16834943/file/original-f5c8959760f5125529fdc38731ff9a17.jpg?resize=1200x900&vertical=center"
            className="h-[90vh] w-[50vw] object-cover rounded-r-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
