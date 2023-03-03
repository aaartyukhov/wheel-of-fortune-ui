import React from 'react';
import { Button } from '@alfalab/core-components-button';
import { createCn } from 'bem-react-classname';
import PageLayoutCenter from '../../components/PageLayoutCenter/PageLayoutCenter.jsx';
import Logo from '../../components/Logo/Logo.jsx';

import repeatLogo from '../../images/repeat-icon.svg';

import './ErrorPage.scss';

const cn = createCn('error-page');

function ErrorPage() {
  return (
    <PageLayoutCenter className={cn()}>
      <Logo />
      <p className={cn('text')}>
        <span className={cn('accent-text')}>{'Упс, что-то пошло не\u00A0так.'}</span>
        {'\nОбнови страницу,\nэто должно помочь'}
      </p>
      <Button
        className={cn('btn')}
        view="secondary"
        leftAddons={<img src={repeatLogo} />}
      >
        Обновить страницу
      </Button>
    </PageLayoutCenter>
  );
}

export default ErrorPage;
