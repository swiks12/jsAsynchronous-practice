import React from "react";
import { FormControlLabel, Checkbox, FormHelperText } from "@mui/material";
import { red } from "@mui/material/colors";

{
  /* Need checkbox with label then we need to use FormControlLabel */
}
const CheckBoxComponent = (props) => {
  return(
  <>
    <FormControlLabel
      control={
        <Checkbox
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
      }
      label={props.label}
    />
    <FormHelperText sx={{color:red[600]}}>{props.error}</FormHelperText>
  </>);
};

export default CheckBoxComponent;
