import React from "react";
import { Button } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";

const ButtonComponent = ({name,type}) => {
  return (
    <Button variant="contained" size="medium" type={type} sx={{bgcolor:purple[600]}} >
      {name}
    </Button>
  );
};

export default ButtonComponent;
