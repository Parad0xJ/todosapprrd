import React from 'react'

export const HomePage = props => {

  return (

    <div className="card border-primary " id='home'>
      <div className="card-header border-primary">
        <h4>Welcome on this TODOS site</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">Please use navigation menu for call Todos of each users</h5>
        <p className="card-text">They are 5 users, each of them have 20 todos. Todos with red footer are non-completed & green footer are completed .</p>
      </div>
      <div className="card-footer text-muted border-primary">
        You are on the HomePage - Switch with navigation between Users or back on this page
                </div>
    </div>

  )
}