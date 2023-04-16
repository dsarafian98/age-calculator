import {
  Divider,
  Button,
  IconButton,
  makeStyles,
  Container,
  Avatar,
} from "@material-ui/core";
import React from "react";

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

function SectionDivider() {
  const buttonImage = "/images/icon-arrow.svg";
  const classes = useStyles();

  return (
    <Container className={classes.row}>
      <Divider className={classes.divider} component="div" flexItem></Divider>
      <IconButton className={classes.button} edge="false" variant="filled">
        <img alt="arrow" src={"" + buttonImage}></img>
      </IconButton>
    </Container>
  );
}

export default SectionDivider;
