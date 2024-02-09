import React from 'react';
import PropTypes from 'prop-types';
import { createCn } from 'bem-react-classname';

import './PageLayoutCenter.scss';

function PageLayoutCenter({ className, children }) {
  const cn = createCn('page-center', className);
  return <main className={cn()}>{children}</main>;
}

PageLayoutCenter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default PageLayoutCenter;
