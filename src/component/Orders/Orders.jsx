import React from 'react'
import './Orders.css'
import {groupNumber, ordersData} from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'

const Orders = () => {
  return (
    <div className="o-container">
        <div className="o-head">
            <img src="./logo.png" alt="logo" />
            <span>Orders today</span>
        </div>

        <div className="stat">
            <span>Amount </span>
            <span>$ {groupNumber(4560)}</span>
        </div>
        <div className="o-orders">
            {
                ordersData.map((order, index)=>(
                    <div key={index} className='order'>
                        <div>
                        <span>{order.name}</span>
                        <span>$ {order.change}</span>
                        </div>
                        <div>
                            <span>{order.type}</span>
                            <span>items: {order.items}</span>
                        </div>
                    </div>
                    
                ))
            }
        </div>

        <div className="ordersChart">
            <span>Split by order</span>
            <OrdersPieChart/>
        </div>
    </div>
  )
}

export default Orders