import { Divider, Button, IconButton, ButtonBase } from "@material-ui/core";
import React from "react";
import "./SectionDivider.css";

function SectionDivider() {
  const buttonImage = "/images/icon-arrow.svg";

  return (
    <div>
      <Button className="button" variant="outlined">
        <img alt="arrow" src={"" + buttonImage}></img>
      </Button>
    </div>
  );
}

export default SectionDivider;
