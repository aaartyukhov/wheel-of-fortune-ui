import React from 'react';
import PropTypes from 'prop-types';
import { createCn } from 'bem-react-classname';
import './Sector.scss';

const cn = createCn('sector');

function Sector({ corner, text }) {
  return (
    <article
      className={cn()}
      style={{ transform: `translateX(-50%) rotate(${corner}deg)` }}
    >
      <div className={cn('present')} />
      <span className={cn('text')}>{ text }</span>
    </article>
  );
}

export default Sector;

Sector.propTypes = {
  text: PropTypes.number,
  corner: PropTypes.number,
};
