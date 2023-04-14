import React from "react";
import "./FormSection.css";
import { TextField } from "@material-ui/core";

const FormSection = ({ day, setDay, month, setMonth, year, setYear }) => {
  return (
    <div>
      <TextField
        label="DAY"
        id="outlined-basic"
        variant="outlined"
        placeholder="DD"
        value={day}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
      <TextField
        label="MONTH"
        id="outlined-basic"
        variant="outlined"
        placeholder="MM"
        value={month}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
      <TextField
        label="YEAR"
        id="outlined-basic"
        variant="outlined"
        placeholder="YYYY"
        value={year}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </div>
  );
};

export default FormSection;
