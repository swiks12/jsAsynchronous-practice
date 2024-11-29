import React from "react";
import { FormControl,InputLabel,Select,MenuItem, FormHelperText } from "@mui/material";
import { red } from "@mui/material/colors";

const SelectComponent = (props) => {
  return (
    <FormControl >
      <InputLabel id={props.labelId}>{props.labelText}</InputLabel>
      <Select labelId={props.labelId} id={props.selectId} size="small" value={props.value} onChange={props.handleChange} name={props.name} onBlur={props.handleBlur} >
        <MenuItem value={props.option1}>{props.option1}</MenuItem>
        <MenuItem value={props.option2}>{props.option2}</MenuItem>
        <MenuItem value={props.option3}>{props.option3}</MenuItem>
      </Select>
      <FormHelperText sx={{color:red[600]}}>{props.error}</FormHelperText>
    </FormControl>
  );
};

export default SelectComponent;
