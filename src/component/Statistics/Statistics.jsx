import React from 'react'
import './Statistics.css'
import {BsArrowUpShort} from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
const Statistics = () => {
  return (
    <div className="st-container">
        <span className='title'>Overview Statistics</span>
        <div className="st-cards">
            <div className="arrowIcon">
                <BsArrowUpShort/>
            </div>
            <div className="st-card">
                <span>Product</span><span>L1-SARIGANDUM COKLAT</span>
            </div>
            <div className="st-card">
                <span>Variance ALL PM</span><span>${groupNumber(455)}</span>
            </div>
            <div className="st-card">
                <span>Variance CELLO</span><span>${groupNumber(37000)}</span>
            </div>
            <div className="st-card">
                <span>Variance RM</span><span>${groupNumber(2000)}</span>
            </div>
            
        </div>
        <StatisticsChart/>
    </div>
  )
}

export default Statistics