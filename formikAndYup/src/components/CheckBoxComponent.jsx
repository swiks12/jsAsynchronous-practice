import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

{
  /* Need checkbox with label then we need to use FormControlLabel */
}
const CheckBoxComponent = ({ name, label }) => {
  return <FormControlLabel control={<Checkbox name={name} />} label={label} />;
};

export default CheckBoxComponent;
