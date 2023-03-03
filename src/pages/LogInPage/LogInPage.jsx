import React, { useEffect, useState } from 'react';
import { Button } from '@alfalab/core-components-button';
import { Input } from '@alfalab/core-components-input';
import { createCn } from 'bem-react-classname';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageLayoutCenter from '../../components/PageLayoutCenter/PageLayoutCenter.jsx';
import Logo from '../../components/Logo/Logo.jsx';

import {
  sendLoginRequest,
  userLoginStatusSelector,
  userSelector,
} from '../../store/state/user';
import { requestStatuses } from '../../constants/common';
import ROUTES from '../../constants/routes';

import './LogInPage.scss';

const rexExp = /^\w+@alfaleasing.ru$/;
const cn = createCn('login-page');

function LogInPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isTouchedInput, setIsTouchedInput] = useState(false);

  const dispatch = useDispatch();
  const statusLogin = useSelector(userLoginStatusSelector);
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const validateEmail = (_email) => {
    if (!rexExp.test(_email)) {
      setError('Введи свою корпоративную почту');
      return false;
    }
    setError('');
    return true;
  };

  const handleBlur = () => {
    validateEmail(email);
    setIsTouchedInput(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      dispatch(sendLoginRequest({ email }));
    }

    setIsTouchedInput(true);
  };

  useEffect(() => {
    if (isTouchedInput) {
      validateEmail(email);
    }
  }, [email]);

  useEffect(() => {
    if (user) {
      if (user.present) {
        navigate(ROUTES.presentPage);
      } else {
        navigate(ROUTES.mainPage);
      }
    }
  }, [user]);

  return (
    <PageLayoutCenter className={cn()}>
      <Logo type="full" />
      <p className={cn('text')}>
        {'Введи корпоративную почту\nи крути '}
        <span className={cn('accent-text')}>колесо фортуны</span>
      </p>
      <form className={cn('form')} onSubmit={handleSubmit}>
        <Input
          className={cn('input')}
          placeholder="mail@alfaleasing.ru"
          block={true}
          size="m"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          error={error}
          onBlur={handleBlur}
          type="email"
        />
        <Button
          className={cn('btn')}
          view="primary"
          block={true}
          type="submit"
          size="m"
          loading={statusLogin === requestStatuses.loading}
        >
          Войти
        </Button>
      </form>
    </PageLayoutCenter>
  );
}

export default LogInPage;
