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
  console.log(day);

  const onDayChange = (event) => {
    setDay(event.target.value);
  };
  const onMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const onYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Container>
      <TextField
        className={styles.firstBox}
        label="DAY"
        id="outlined-basic"
        variant="outlined"
        placeholder="DD"
        value={day}
        onChange={onDayChange}
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
        onChange={onMonthChange}
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
        onChange={onYearChange}
        InputLabelProps={{
          shrink: true,
        }}
      ></TextField>
    </Container>
  );
};

export default FormSection;
