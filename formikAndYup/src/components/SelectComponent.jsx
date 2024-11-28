import React from "react";
import { FormControl,InputLabel,Select,MenuItem } from "@mui/material";

const SelectComponent = ({option1,option2,option3,selectId,labelId,labelText}) => {
  return (
    <FormControl>
      <InputLabel id={labelId}>{labelText}</InputLabel>
      <Select labelId={labelId} id={selectId} size="small">
        <MenuItem value={option1}>{option1}</MenuItem>
        <MenuItem value={option2}>{option2}</MenuItem>
        <MenuItem value={option3}>{option3}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
