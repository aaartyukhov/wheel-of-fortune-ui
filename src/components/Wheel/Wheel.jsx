import React, { useEffect } from 'react';
import { Button } from '@alfalab/core-components-button';
import { createCn } from 'bem-react-classname';
import PropTypes from 'prop-types';
import './Wheel.scss';
import Sector from '../Sector/Sector.jsx';
import Logo from '../Logo/Logo.jsx';
import { mediaQueries, useMatchMedia } from '../../hooks/useMatchMedia.jsx';
import { CORNER_SECTOR } from '../../constants/common';

function Wheel({
  className,
  isLoading,
  isSpined,
  onClickSpin,
  onStopSpin,
  spinTime,
  spineDeg,
}) {
  const cn = createCn('wheel', className);

  const isMobile = useMatchMedia(mediaQueries.customMobile);

  useEffect(() => {
    if (isSpined) {
      setTimeout(() => {
        if (typeof onStopSpin === 'function') {
          onStopSpin();
        }
      }, spinTime + 1000);
    }
  }, [isSpined]);

  return (
    <article className={cn()}>
      <div
        className={cn('sectors')}
        style={{
          transition: `transform ${spinTime / 1000}s`,
          transform: isSpined ? `rotate(-${spineDeg}deg)` : '',
        }}
      >
        {new Array(15).fill(null).map((_, index) => (
          <Sector key={index} text={index + 1} corner={index * CORNER_SECTOR} />
        ))}
      </div>

      <div className={cn('controls')}>
        {isSpined ? (
          <div className={cn('logo-container')}>
            <Logo className={cn('logo')} color="red" />
            <h1 className={cn('title')}>может повезёт?</h1>
          </div>
        ) : (
          <>
            <h1 className={cn('title')}>{'Испытай\nсвою удачу'}</h1>
            <Button
              className={cn('btn')}
              view="primary"
              onClick={onClickSpin}
              size={isMobile ? 'xxs' : 'm'}
              loading={isLoading}
            >
              Крутить
            </Button>
            <p className={cn('footnote')}>
              {'Крутить колесо можно\nтолько один раз'}
            </p>
          </>
        )}
      </div>
    </article>
  );
}

Wheel.propTypes = {
  className: PropTypes.string,
  onStopSpin: PropTypes.func,
  isLoading: PropTypes.bool,
  onClickSpin: PropTypes.func,
  isSpined: PropTypes.bool,
  spinTime: PropTypes.number,
  spineDeg: PropTypes.number,
};

export default Wheel;
