import React from "react";
import PropTypes from "prop-types";
import logoRed from "../../images/logo-red.png";
import logoGrey from "../../images/logo-grey.png";
import { createCn } from "bem-react-classname";

import "./Logo.scss";

function Logo({ className, color = "grey", size = "m" }) {
  const cn = createCn("logo", className);
  return (
    <img
      className={cn({ size })}
      src={color === "grey" ? logoGrey : logoRed}
      alt="лого"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Logo;
