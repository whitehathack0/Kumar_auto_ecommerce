import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
    PRODUCT_DEET_FAIL, PRODUCT_DEET_REQUEST, PRODUCT_DEET_SUCCESS } from '../constants/ProductConstants.js'
import axios from 'axios'


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } 
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message, 
        })
    }
}


export const listProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DEET_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({
            type: PRODUCT_DEET_SUCCESS,
            payload: data
        })
    } 
    catch (error) {
        dispatch({
            type: PRODUCT_DEET_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message, 
        })
    }
}