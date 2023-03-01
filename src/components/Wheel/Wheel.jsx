import React, { useEffect, useState } from "react";
import { Button } from "@alfalab/core-components-button";
import { createCn } from "bem-react-classname";
import PropTypes from "prop-types";
import "./Wheel.scss";
import Sector from "../Sector/Sector.jsx";
import { SPINE_COUNT, SPINE_TIME } from "../../constants/common";
import Logo from "../Logo/Logo.jsx";
import { mediaQueries, useMatchMedia } from "../../hooks/useMatchMedia.jsx";

function Wheel({ className, onStopSpin }) {
  const cn = createCn("wheel", className);

  const [isSpined, setIsSpined] = useState(false);

  const isMobile = useMatchMedia(mediaQueries.customMobile);

  useEffect(() => {
    if (isSpined) {
      setTimeout(() => {
        if (typeof onStopSpin === "function") {
          onStopSpin();
        }
      }, SPINE_TIME);
    }
  }, [isSpined]);

  return (
    <article className={cn()}>
      <div
        className={cn("sectors")}
        style={{
          transition: `transform ${SPINE_TIME / 1000}s`,
          transform: isSpined ?  '' : `rotate(${SPINE_COUNT * 360}deg)`,
        }}
      >
        {new Array(15).fill(null).map((_, index) => {
          return <Sector key={index} text={index + 1} corner={index * 24} />;
        })}
      </div>

      <div className={cn("controls")}>
        {isSpined ? (
          <div className={cn("logo-container")}>
            <Logo className={cn('logo')} color="red" />
            <h1 className={cn("title")}>может повезёт?</h1>
          </div>
        ) : (
          <>
            <h1 className={cn("title")}>{"Испытай\nсвою удачу"}</h1>
            <Button
              className={cn("btn")}
              view="primary"
              onClick={() => {
                setIsSpined(true);
              }}
              size={isMobile ? 'xxs' : 'm'}
            >
              Крутить
            </Button>
            <p className={cn("footnote")}>
              {"Крутить колесо можно\nтолько один раз"}
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
};

export default Wheel;
