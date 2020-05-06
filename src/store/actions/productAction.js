export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

const fetchProductsAction = (dispatch) => {
    console.log("entered1")
    fetch('http://localhost:3001/api/products/products').then((response) => {
        return response.json();
    })
        .then((res) => dispatch({ type: FETCH_PRODUCTS, payload: res.data })
            // *** Use the object
            //console.log(res);
        )
            //dispatch({ type: FETCH_PRODUCTS, payload: res.data }))
}


export default fetchProductsAction;