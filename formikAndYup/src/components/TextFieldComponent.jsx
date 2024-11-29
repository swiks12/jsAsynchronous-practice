import React from "react";
import { TextField, InputAdornment } from "@mui/material";

const TextFieldComponent = (props ) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      name={props.name}
      placeholder={props.placeholder}
      fullWidth
      size="small"
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      error={props.error}
      helperText={props.error}
      slotProps={{
        input: {
          startAdornment: (
            // InputAdornment can be used to add prefix,suffix and action to the input
            <InputAdornment>
              <span class="material-symbols-outlined">{props.iconName}</span>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default TextFieldComponent;
