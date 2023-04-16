import { Divider, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import FormSection from "../formSection/FormSection";
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
      ></FormSection>
      <SectionDivider />
    </div>
  );
};

export default Box;
