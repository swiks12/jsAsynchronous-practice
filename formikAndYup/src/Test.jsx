import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const description = useSelector((state) => state.user.data.description);
  const image = useSelector((state) => state.user.data.reduxImage);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-12 border p-8 w-[50vw] rounded-2xl shadow-md items-center mt-12">
          <img src={image} alt="profile" className="h-[30vh] rounded-2xl " />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">Your written description is:</p>
            <p className="h-fit p-4 rounded-2xl border w-[20vw]">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
