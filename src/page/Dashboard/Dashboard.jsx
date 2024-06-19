import React from 'react'
import './Dashboard.css'
import { cardsData, groupNumber } from '../../data'
import Statistics from '../../component/Statistics/Statistics'
import Orders from '../../component/Orders/Orders'

const Dashboard = () => {
  return<div className="d-container">
    {/* left-side */}
    <div className="d-dashboard">
      <div className="dashboardHead">
        <div className="head">
          <span>Achievement</span>
          <div className="durationButton">
          <select name="" id="">
              <option value="">1112</option>
              <option value="">1113</option>
            </select>
            <select name="" id="">
              <option value="">Line 1</option>
              <option value="">Line 2</option>
              <option value="">Line 3</option>
              <option value="">Line 4</option>
              <option value="">Line 5</option>
              
            </select>
            <select name="" id="">
              <option value="">1 week</option>
              <option value="">1 month</option>
            </select>
          </div>
        </div>
          <div className="d-cards">
            {
              cardsData.map((card, index)=>(
                <div className="card">
                  <div className="cardHead">
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className="cardAmount">
                    <span>$</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
      <Statistics/>
    </div>

    <Orders/>
    
  </div>
}

export default Dashboard