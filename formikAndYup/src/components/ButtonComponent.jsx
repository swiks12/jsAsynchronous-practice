import React from "react";
import { Button } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";

const ButtonComponent = ({name,type,onClick}) => {
  return (
    <Button variant="contained" size="medium" type={type} sx={{bgcolor:purple[600]}} onClick={onClick} >
      {name}
    </Button>
  );
};

export default ButtonComponent;
