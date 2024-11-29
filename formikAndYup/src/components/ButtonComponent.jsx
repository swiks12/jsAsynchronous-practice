import React from "react";
import { Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ButtonComponent = ({name,type}) => {
  return (
    <Button variant="contained" size="medium" type={type} sx={{bgcolor:deepPurple[500]}} >
      {name}
    </Button>
  );
};

export default ButtonComponent;
