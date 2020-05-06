import { FETCH_PRODUCTS } from '../actions/productAction'


/*const products = (state = {}, { type, payload }) => {
    switch(type){
        case 'TEST':
            return {id:'test',data:payload}
        default:
            return state
    }
}
*/

const productReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case FETCH_PRODUCTS:
            console.log("entered2")
            return {...state, products : payload };
       default:
            return state;
    }
}

export default productReducer;