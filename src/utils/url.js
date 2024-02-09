import { generatePath } from 'react-router';

function isObject(item) {
  return typeof item === 'object' && !Array.isArray(item) && item !== null;
}

const toRouterNotation = (pattern) => pattern.replace(/({)(.*?)(})/g, (match, ...rest) => `:${rest[1]}`);
const constructUrl = (pattern, params, query) => {
  const preparedPattern = toRouterNotation(pattern);
  const search = new URLSearchParams();

  if (isObject(query)) {
    Object.entries(query).forEach(
      ([key, value]) => value !== undefined && search.set(key, value),
    );
  }

  return query === undefined
    ? generatePath(preparedPattern, params)
    : `${generatePath(preparedPattern, params)}?${search}`;
};

export default constructUrl;
