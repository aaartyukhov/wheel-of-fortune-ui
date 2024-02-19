import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { createCn } from 'bem-react-classname';
import Logo from '../../components/Logo/Logo';

import './PresentPage.scss';
import PRESENTS from '../../constants/presents';
import { userSelector } from '../../store/state/user';
import ROUTES from '../../constants/routes';
import PageLayoutCenter from '../../components/PageLayoutCenter/PageLayoutCenter';

const cn = createCn('present-page');

function PresentPage() {
  const user = useSelector(userSelector);

  if (!user) {
    return <Navigate to={ROUTES.logInPage} />;
  }

  const { name: presentName } = user.present;

  const { label, img, getFootnote } = PRESENTS[presentName];

  return (
    <PageLayoutCenter className={cn()}>
      <section className={cn('present-container')}>
        <img className={cn('img')} src={img} alt="Подарок" />
        <h1
          className={cn('title')}
        >
          {`Поздравляем!\nТвой подарок —\n${label}`}
        </h1>
        <div className={cn('footnote-container')}>
          <p className={cn('footnote')}>{getFootnote()}</p>
          <Logo className={cn('logo')} size="s" type="full" />
        </div>
      </section>
    </PageLayoutCenter>
  );
}

export default PresentPage;
