import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


// import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer from './redux/rootReducer';
import store from './redux/store'
// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
);
