import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import FormSection from "../formSection/FormSection";
import SectionDivider from "../SectionDivider/SectionDivider";
import "./Box.css";

const Box = () => {
  const [year, setYear] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [day, setDay] = useState(undefined);

  return (
    <div className="content-box">
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
