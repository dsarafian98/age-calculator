import {
  Divider,
  Button,
  IconButton,
  makeStyles,
  Container,
  Avatar,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    row: {
      display: "inline-flex",
      alignItems: "center",
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      paddingLeft: "0px",
    },
    divider: {
      backgroundColor: "#f0f0f0",
      width: "90%",
      height: "1px",
      marginTop: "30px",
    },
    button: {
      backgroundColor: "#844ef8",
    },
  };
});

function SectionDivider({
  day,
  setDaysAway,
  month,
  setMonthsAway,
  year,
  setYearsAway,
}) {
  const buttonImage = "/images/icon-arrow.svg";
  const classes = useStyles();

  const timeAway = () => {
    const today = new Date().getTime();
    const targetDate = new Date(year, month, day).getTime();

    console.log(targetDate);

    if (today >= targetDate) {
      const difference = new Date(today - targetDate);
      setYearsAway(difference.getFullYear() - 1970);
      setMonthsAway(difference.getMonth() + 1);
      setDaysAway(difference.getDate());
    } else {
      const difference = new Date(targetDate - today);
      setYearsAway(difference.getFullYear());
      setMonthsAway(difference.getMonth() + 1);
      setDaysAway(difference.getDate());
    }
  };

  return (
    <Container className={classes.row}>
      <Divider className={classes.divider} component="div" flexItem></Divider>
      <IconButton
        className={classes.button}
        edge="false"
        variant="filled"
        onClick={timeAway}
      >
        <img alt="arrow" src={"" + buttonImage}></img>
      </IconButton>
    </Container>
  );
}

export default SectionDivider;
