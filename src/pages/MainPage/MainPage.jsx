import React, { useEffect, useState } from 'react';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import Wheel from '../../components/Wheel/Wheel.jsx';
import {
  sendUserPresentRequest,
  userGetPresentStatusSelector,
  userSelector,
} from '../../store/state/user';
import { CORNER_SECTOR, requestStatuses, SPINE_TIME } from '../../constants/common';
import ROUTES from '../../constants/routes';

import './MainPage.scss';
import randomInteger from '../../utils/random.js';

const cn = createCn('main-page');

const MainPage = () => {
  const [isSpined, setIsSpined] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statusGetPresent = useSelector(userGetPresentStatusSelector);

  const user = useSelector(userSelector);

  if (!user) {
    return <Navigate to={ ROUTES.logInPage }/>;
  }

  const spineDeg = (randomInteger(1, 15) * CORNER_SECTOR) + 3600;

  const handleClickSpin = () => {
    dispatch(sendUserPresentRequest());
  };

  const handleStopSpin = () => {
    navigate(ROUTES.presentPage);
  };

  useEffect(() => {
    if (statusGetPresent === requestStatuses.success) {
      setIsSpined(true);
    }
  }, [statusGetPresent]);

  return (
    <main className={cn()}>
      <Wheel
        className={cn('wheel')}
        isLoading={statusGetPresent === requestStatuses.loading}
        isSpined={isSpined}
        onClickSpin={handleClickSpin}
        onStopSpin={handleStopSpin}
        spinTime={SPINE_TIME}
        spineDeg={ spineDeg }
      />
    </main>
  );
};

export default MainPage;
