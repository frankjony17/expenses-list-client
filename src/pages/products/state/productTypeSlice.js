
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    types: [],
    showLoading: false
};

const productTypeSlice = createSlice({
    name: 'productType',
    initialState,
    reducers: {
        confirmedGetProductType(state, action) {
            return {
                ...state,
                types: action.payload,
                showLoading: false
            }
        }
    }
})

export const {
    confirmedGetProductType
} = productTypeSlice.actions

export default productTypeSlice.reducer
