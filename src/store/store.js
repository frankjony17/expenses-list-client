import { configureStore } from '@reduxjs/toolkit'
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from './reducers/authSlice';


export const store = configureStore({
	reducer: {
		auth: authReducer,
		form: reduxFormReducer,
	}
});
