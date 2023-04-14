import React from "react";
import "./FormSection.css";
import { TextField } from "@material-ui/core";

const FormSection = () => {
  return (
    <div>
      <TextField
        label="DAY"
        id="outlined-basic"
        variant="outlined"
        placeholder="DD"
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
      <TextField
        label="MONTH"
        id="outlined-basic"
        variant="outlined"
        placeholder="MM"
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
      <TextField
        label="YEAR"
        id="outlined-basic"
        variant="outlined"
        placeholder="YYYY"
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </div>
  );
};

export default FormSection;
