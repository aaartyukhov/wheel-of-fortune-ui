// import ROUTES from '../../constants/routes';

const errorHandlerMiddleware = () => (next) => (action) => next(action);
// const { error } = action.payload || {};

// if (error !== undefined) {
//   browserHistory.push(ROUTES.errorPage);
// }

export default errorHandlerMiddleware;
