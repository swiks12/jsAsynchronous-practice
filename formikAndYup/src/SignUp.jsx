import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import TextFieldComponent from "./components/TextFieldComponent";
import SelectComponent from "./components/SelectComponent";
import CheckBoxComponent from "./components/CheckBoxComponent";

const SignUp = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] bg-dark-purple">
        <div className="flex rounded-2xl h-[90vh] gap-[50px] justify-center items-center pt-[80px] pr-12 pb-[80px] shadow-2xl  bg-white ">
          <img
            src="https://cdn.dribbble.com/users/1987152/screenshots/6337035/final_4x.png?resize=768x576&vertical=center"
            className="h-[90vh] w-[50vw] object-cover rounded-l-2xl"
          />

          <div className="flex items-center">
            <div>
              <p className="text-3xl font-bold mb-8 text-center">Sign Up</p>
              <form action="" className="flex flex-col gap-4">
                {/* name */}
                <TextFieldComponent
                  name="name"
                  placeholder="Enter your name"
                  iconName="person"
                />

                {/* email */}
                <TextFieldComponent
                  name="email"
                  placeholder="Enter your email"
                  iconName="mail"
                />

                {/* password */}
                <TextFieldComponent
                  name="password"
                  placeholder="Enter your password"
                  iconName="lock"
                />

                {/* select for countries */}
                <SelectComponent
                  option1="Nepal"
                  option2="India"
                  option3="USA"
                  selectId="country-select"
                  labelId="country-label"
                  labelText="Country"
                />

                <CheckBoxComponent
                  name="conditions"
                  label="I Agree to the terms and conditions"
                />
                <ButtonComponent name="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
