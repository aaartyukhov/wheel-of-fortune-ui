import React from 'react';
import PropTypes from 'prop-types';
import { createCn } from 'bem-react-classname';

import './PageLayout.scss';

function PageLayout({ className, children }) {
  const cn = createCn('page', className);
  return <main className={cn()}>{children}</main>;
}

PageLayout.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
};

export default PageLayout;
