import { configureStore } from '@reduxjs/toolkit'
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from './pages/auth/state/authSlice';
import productTypeReducer from './pages/products/state/productTypeSlice';


export const store = configureStore({
	reducer: {
		auth: authReducer,
		productType: productTypeReducer,
		form: reduxFormReducer,
	}
});
