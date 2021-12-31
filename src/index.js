import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import CitasPage from './pages/CitasPage';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CitasPage/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
