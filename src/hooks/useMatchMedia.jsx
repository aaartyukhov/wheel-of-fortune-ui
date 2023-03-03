import { useEffect, useState } from 'react';

export const mediaQueries = {
  desktop: 'screen and (max-width: 1439.98px)',
  notebook: 'screen and (max-width: 1279.98px)',
  tablet: 'screen and (max-width: 1023.98px)',
  tabletVertical: 'screen and (max-width: 767.98px)',
  customMobile: 'screen and (max-width: 575px)',
  mobile: 'screen and (max-width: 374.98px)',
  mobileS: 'screen and (max-width: 20em)',
};

/**
 * Возвращает флаг, использующийся для определения соответствия
 * документа переданной строке медиавыражения
 *
 * @param {string} query строка медиавыражения
 * @returns {boolean} true если в document настоящее время
 * соответствует списку медиа-запросов или false нет
 */
export const useMatchMedia = (query) => {
  const mql = window.matchMedia(query);
  const [match, setMatch] = useState(mql.matches);

  useEffect(() => {
    const handleMatchChange = ({ matches }) => setMatch(matches);

    mql.addEventListener('change', handleMatchChange);

    return () => mql.removeEventListener('change', handleMatchChange);
  }, [query]);

  return match;
};
