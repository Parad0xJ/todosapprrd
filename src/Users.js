import React, { Fragment } from 'react'

export const UserOne = props => {

  return (
    <Fragment>

      {props.allTodos.map(elt => <div key={elt.id} className="card text-center mt-4">
        <div className='card-body  m-1' >
          <h5 className="card-title">{`Todo create by : User-${elt.userId}`}</h5><hr />
          <p className="card-text">{elt.title}</p>
          <p className={elt.completed === true ? 'card-text card-footer bg-danger' : 'card-text card-footer bg-success '}>{`ID : ${elt.id}`}
            {elt.completed === true ? <span className='float-right text-light'>Completed</span> : <span className='float-right'> non-completed</span>}
          </p>
        </div>
      </div>)}
    </Fragment>
  )

}

export const UserTwo = props => {

  return (
    <Fragment>
      {props.allTodos.map(elt => <div key={elt.id} className="card text-center mt-4">
        <div className='card-body  m-1' >
          <h5 className="card-title">{`UserName : User-${elt.userId}`}</h5><hr />
          <p className="card-text">{elt.title}</p>
          <p className={elt.completed === true ? 'card-text card-footer bg-danger' : 'card-text card-footer bg-success '}>{`ID : ${elt.id}`}
            {elt.completed === true ? <span className='float-right text-light'>Completed</span> : <span className='float-right'> non-completed</span>}
          </p>
        </div>
      </div>)}
    </Fragment>
  )

}

export const UserThree = props => {

  return (
    <Fragment>
      {props.allTodos.map(elt => <div key={elt.id} className="card text-center mt-4">
        <div className='card-body  m-1' >
          <h5 className="card-title">{`Todo create by : User-${elt.userId}`}</h5><hr />
          <p className="card-text">{elt.title}</p>
          <p className={elt.completed === true ? 'card-text card-footer bg-danger' : 'card-text card-footer bg-success '}>{`ID : ${elt.id}`}
            {elt.completed === true ? <span className='float-right text-light'>Completed</span> : <span className='float-right'> non-completed</span>}
          </p>
        </div>
      </div>)}
    </Fragment>
  )

}

export const UserFour = props => {

  return (
    <Fragment>
      {props.allTodos.map(elt => <div key={elt.id} className="card text-center mt-4">
        <div className='card-body  m-1' >
          <h5 className="card-title">{`UserName : User-${elt.userId}`}</h5><hr />
          <p className="card-text">{elt.title}</p>
          <p className={elt.completed === true ? 'card-text card-footer bg-danger' : 'card-text card-footer bg-success '}>{`ID : ${elt.id}`}
            {elt.completed === true ? <span className='float-right text-light'>Completed</span> : <span className='float-right'> non-completed</span>}
          </p>
        </div>
      </div>)}
    </Fragment>
  )

}
export const UserFive = props => {

  return (
    <Fragment>
      {props.allTodos.map(elt => <div key={elt.id} className="card text-center mt-4">
        <div className='card-body  m-1' >
          <h5 className="card-title">{`Todo create by : User-${elt.userId}`}</h5><hr />
          <p className="card-text">{elt.title}</p>
          <p className={elt.completed === true ? 'card-text card-footer bg-danger' : 'card-text card-footer bg-success '}>{`ID : ${elt.id}`}
            {elt.completed === true ? <span className='float-right text-light'>Completed</span> : <span className='float-right'> non-completed</span>}
          </p>
        </div>
      </div>)}
    </Fragment>
  )

}


