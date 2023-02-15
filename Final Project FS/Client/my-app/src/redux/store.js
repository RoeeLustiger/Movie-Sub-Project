import { createStore } from 'redux'
import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

// const store = createStore(rootReducer)
export default configureStore({
    reducer: rootReducer,
  });

  
// export default store