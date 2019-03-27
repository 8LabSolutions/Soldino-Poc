/* eslint-disable react/jsx-one-expression-per-line */
import React, {Component} from 'react';
import NavBar from './NavBar'
import { store } from "../../store/index";
import PendingOrder from './PendingOrder';

class Orders extends Component {

  printProduct(product) {
    return(
      <li className="list-group-item">
        <PendingOrder title={product.title} quantity={product.quantity} price={product.price} />
      </li>
    )
  }
  
  printOrder(order) {
    let orderCost = 0
    {order.products.map (i => orderCost += (i.price*i.quantity))}
    if(store.getState().logged === false){window.location.href = "/"}
    return(
      <div>
        <ul className="list-group">
          <div className="col-sm-12">
            <li className="list-group-item">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">Order #{/*order.number*/}</div>
                  <div className="col-sm-6">{order.date}</div>
                </div>
              </div>
            </li>

            {order.products.map (i => this.printProduct(i))}
            <li className="list-group-item">
              <div className="col-sm-12">Total: CC {orderCost}</div>
            </li>
          </div>
        </ul>
        <br />
      </div>
    )
  }

  render() {
    let ordersList = store.getState().ordersList;
    let totalOrders = ordersList.length
    return (
      <div>
        <NavBar />
        <h3>Orders</h3>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              { totalOrders===0 ? <p>Nothing here</p> : ordersList.map(i => {return this.printOrder(i)}) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Orders;