import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import store from './store';
import AppRotes from './AppRotes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRotes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
