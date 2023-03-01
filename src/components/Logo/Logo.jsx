import React from "react";
import PropTypes from "prop-types";
import logoShort from "../../images/logo-short.png";
import logoFull from "../../images/logo-full.png";
import { createCn } from "bem-react-classname";

import "./Logo.scss";

function Logo({ className, type = 'short', size='m' }) {
  const cn = createCn("logo", className);
  return (
    <img
      className={cn({ type, size })}
      src={type === "short" ? logoShort : logoFull}
      alt="лого"
    />
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
};

export default Logo;
