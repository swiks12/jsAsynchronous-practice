import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const TextFieldComponent = ({name,placeholder,iconName,value,handleChange,handleBlur,type,error}) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      name={name}
      placeholder={placeholder}
      fullWidth
      size="small"
      type={type}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={error}
      helperText={error}
      slotProps={{
        input: {
          startAdornment: (
            // InputAdornment can be used to add prefix,suffix and action to the input
            <InputAdornment>
              <span class="material-symbols-outlined">{iconName}</span>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TextFieldComponent;
