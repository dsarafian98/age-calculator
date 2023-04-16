import React from "react";
import { Container, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {
    firstBox: {
      marginTop: "20px",
      marginBottom: "20px",
      marginRight: "20px",
      marginLeft: "0px",
    },
    textBoxSpacing: {
      margin: "20px",
    },
  };
});

const FormSection = ({ day, setDay, month, setMonth, year, setYear }) => {
  const styles = useStyles();

  return (
    <Container>
      <TextField
        className={styles.firstBox}
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
        className={styles.textBoxSpacing}
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
        className={styles.textBoxSpacing}
        label="YEAR"
        id="outlined-basic"
        variant="outlined"
        placeholder="YYYY"
        value={year}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </Container>
  );
};

export default FormSection;
