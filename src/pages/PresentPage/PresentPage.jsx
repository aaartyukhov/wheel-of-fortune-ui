import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { createCn } from 'bem-react-classname';
import { Link } from '@alfalab/core-components-link';
import Logo from '../../components/Logo/Logo.jsx';

import './PresentPage.scss';
import PRESENTS from '../../constants/presents';
import { userSelector } from '../../store/state/user.js';
import ROUTES from '../../constants/routes.js';
import PageLayoutCenter from '../../components/PageLayoutCenter/PageLayoutCenter.jsx';

const cn = createCn('present-page');

function PresentPage() {
  const user = useSelector(userSelector);

  if (!user) {
    return <Navigate to={ROUTES.logInPage} />;
  }

  const { name: presentName } = user.present;

  const { label, img, footnote } = PRESENTS[presentName];
  const { name: nameSkyEng, link } = PRESENTS.skyEng;

  const renderFootnote = () => {
    switch (presentName) {
      case nameSkyEng:
        return (
          <p className={cn('footnote')}>
            {'Пройти обучение можно '}
            <Link view="default" rel="noopener" target="_blank" href={link}>
              здесь
            </Link>
          </p>
        );

      default:
        return <p className={cn('footnote')}>{footnote}</p>;
    }
  };

  return (
    <PageLayoutCenter className={cn()}>
      <section className={cn('present-container')}>
        <img className={cn('img')} src={img} alt="img" />
        <h1
          className={cn('title')}
        >{`Поздравляем!\nТвой подарок —\n${label}`}</h1>
        {renderFootnote()}
        <Logo className={cn('logo')} size="s" type="full" />
      </section>
    </PageLayoutCenter>
  );
}

export default PresentPage;
