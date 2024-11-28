import React from "react";
import { Button } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ButtonComponent = ({name}) => {
  return (
    <Button variant="contained" size="medium" sx={{bgcolor:deepPurple[500]}} >
      {name}
    </Button>
  );
};

export default ButtonComponent;
