import React from "react";
import { createCn } from "bem-react-classname";
import "./MainPage.scss";
import Wheel from "../../components/Wheel/Wheel.jsx";

const cn = createCn("main-page");

const MainPage = () => {
  const handleStopSpin = () => {
    console.log('stop');
  };
  return (
    <main className={cn()}>
      <Wheel className={cn("wheel")} onStopSpin={ handleStopSpin } />
    </main>
  );
};

export default MainPage;
