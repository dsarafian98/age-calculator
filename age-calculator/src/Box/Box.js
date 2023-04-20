import { Divider, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import FormSection from "../FormSection/FormSection";
import ResultsSection from "../ResultsSection/ResultsSection";
import SectionDivider from "../SectionDivider/SectionDivider";

const useStyles = makeStyles((theme) => {
  return {
    contentBox: {
      padding: "40px",
      flexDirection: "column",
      display: "flex",
      height: "500px",
      width: "800px",
      backgroundColor: "white",
      borderRadius: "20px 20px 150px 20px",
    },
  };
});

const Box = () => {
  const [year, setYear] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [day, setDay] = useState(undefined);

  const [daysAway, setDaysAway] = useState(undefined);
  const [monthsAway, setMonthsAway] = useState(undefined);
  const [yearsAway, setYearsAway] = useState(undefined);

  const [dayErrorText, setDayErrorText] = useState("");
  const [monthErrorText, setMonthErrorText] = useState("");
  const [yearErrorText, setYearErrorText] = useState("");

  const styles = useStyles();

  return (
    <div className={styles.contentBox}>
      <FormSection
        year={year}
        month={month}
        day={day}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        dayErrorText={dayErrorText}
        setDayErrorText={setDayErrorText}
        monthErrorText={monthErrorText}
        setMonthErrorText={setMonthErrorText}
        yearErrorText={yearErrorText}
        setYearErrorText={setYearErrorText}
      ></FormSection>
      <SectionDivider
        year={year}
        setYearsAway={setYearsAway}
        month={month}
        setMonthsAway={setMonthsAway}
        day={day}
        setDaysAway={setDaysAway}
        dayErrorText={dayErrorText}
        monthErrorText={monthErrorText}
        yearErrorText={yearErrorText}
      ></SectionDivider>
      <ResultsSection
        daysAway={daysAway}
        monthsAway={monthsAway}
        yearsAway={yearsAway}
      ></ResultsSection>
    </div>
  );
};

export default Box;
