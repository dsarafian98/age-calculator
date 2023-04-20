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

const FormSection = ({
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  dayErrorText,
  setDayErrorText,
  monthErrorText,
  setMonthErrorText,
  yearErrorText,
  setYearErrorText,
}) => {
  const styles = useStyles();
  console.log(day);

  const onDayChange = (event) => {
    setDayErrorText("");
    setDay(event.target.value);
    if (event.target.value > 31 || event.target.value <= 0) {
      setDayErrorText("This is not a valid day.");
    } else if (
      event.target.value == "" ||
      event.target.value == undefined ||
      event.target.value == null
    ) {
      setDayErrorText("This field is required.");
    }
  };

  const onMonthChange = (event) => {
    setMonthErrorText("");
    setMonth(event.target.value);
    if (event.target.value > 12 || event.target.value <= 0) {
      setMonthErrorText("This is not a valid day.");
    } else if (
      event.target.value == "" ||
      event.target.value == undefined ||
      event.target.value == null
    ) {
      setMonthErrorText("This field is required.");
    }
  };

  const onYearChange = (event) => {
    setYearErrorText("");
    setYear(event.target.value);
    if (event.target.value == "") {
      setYearErrorText("This field is required.");
    }
  };

  return (
    <Container>
      <TextField
        error={dayErrorText == "" ? false : true}
        helperText={dayErrorText}
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
        error={monthErrorText == "" ? false : true}
        helperText={monthErrorText}
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
        error={yearErrorText == "" ? false : true}
        helperText={yearErrorText}
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
