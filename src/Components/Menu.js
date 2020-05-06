import React from 'react';
import { connect } from 'react-redux';
import  fetchProductsAction  from '../store/actions/productAction'

const Menu = (props) =>{
    return (
        <div>
        <h1>Menu Page</h1>  
        <br />
            Products: <button onClick={props.fetchProducts}> Fetch Products</button>
            {
                //<p>{props.products.id}</p>
                props.products.length === 0 ? <p> No product found</p> :
                    props.products.map(product => <p>product._id</p>)
          
            }
        </div>
            );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => { dispatch(fetchProductsAction) }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);