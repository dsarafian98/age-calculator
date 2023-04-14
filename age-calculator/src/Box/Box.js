import React, { useState } from "react";
import FormSection from "../formSection/FormSection";
import "./Box.css";

const Box = () => {
  const [years, setYears] = useState(null);
  const [months, setMonths] = useState(null);
  const [days, setDays] = useState(null);

  return (
    <div className="content-box">
      <FormSection years={years} months={months} days={days}></FormSection>
    </div>
  );
};

export default Box;
