import React, { useState } from "react";
import { Container, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => {
  return {};
});

const ResultsSection = ({ daysAway, monthsAway, yearsAway }) => {
  const styles = useStyles();

  return (
    <Container>
      {yearsAway} years
      <br />
      {monthsAway} months
      <br />
      {daysAway} days
    </Container>
  );
};

export default ResultsSection;
