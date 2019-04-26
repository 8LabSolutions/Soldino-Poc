import { connect } from 'react-redux';
import ProductsManager from '../presentational/ProductsManager';
import businessActionCreator from '../../actionsCreator/businessActionCreator';
import { increaseIndex, decreaseIndex, resetIndex } from '../../actions/store';
import { amountStore } from '../../constants/fixedValues';
import { store } from '../../store';
import { setTotalNumberOfMyProducts } from '../../actions/business';

const mapDispatchToProps = (dispatch) => {
  //should dispatch the action that fills the store with the first 50 users
  //*!!! maybe only the first time !!!*/
  return {
    getProductsList: (index)=> {
      //call the action creator to dispatch the products getter
      dispatch(resetIndex())
      businessActionCreator.getTotalStoreProduct().then((total)=>{dispatch(setTotalNumberOfMyProducts(total))})
      businessActionCreator.getMyProducts(amountStore, index).then((action)=>{
        dispatch(action)
      })
    },
    increaseIndex: () => {
      dispatch(increaseIndex())
      businessActionCreator.getMyProducts(amountStore, store.getState().index).then((action)=>{
        dispatch(action)
      })
    },
    decreaseIndex: () => {
      dispatch(decreaseIndex())
      businessActionCreator.getMyProducts(amountStore, store.getState().index).then((action)=>{
        dispatch(action)
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    myProductsArray: state.myProductsArray,
    index: state.index,
    totalMyProduct: state.totalMyProduct
  }
}

const ProductManagerContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsManager);

export default ProductManagerContainer;