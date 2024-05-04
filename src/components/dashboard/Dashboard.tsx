import React from 'react'
import "./DashBoard.css";
import LeftBar from '../leftBar/LeftBar'
import MiddleBar from '../middleBar/MiddleBar'
import RightBar from '../rightBar/RightBar'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <LeftBar />
        <MiddleBar />
        <RightBar />
    </div>
  )
}

export default Dashboard