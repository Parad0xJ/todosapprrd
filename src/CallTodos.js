import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import { Routes } from './Routes'

const NavBar = props => {

  return (

    <nav className="navbar navbar-dark">
      <h4 className='text-light'>New Todos App 2020</h4>
      <div className="navigation">
        <ul className="list-group list-group-horizontal">
          <li id='un' className="list-group-item nav-item mr-4 lien"><NavLink exact activeClassName="selected" to='/'>HomePage </NavLink></li>
          <li id='deux' className="list-group-item nav-item lien ">  <NavLink exact activeClassName="selected" to='/one'>User-1</NavLink></li>
          <li id='trois' className="list-group-item nav-item lien"> <NavLink exact activeClassName="selected" to='/two'>User-2</NavLink></li>
          <li id='quatre' className="list-group-item nav-item lien"> <NavLink exact activeClassName="selected" to='/three'>User-3</NavLink></li>
          <li id='cinq' className="list-group-item nav-item lien"><NavLink exact activeClassName="selected" to='/four'> User-4</NavLink></li>
          <li id='six' className="list-group-item nav-item lien"> <NavLink exact activeClassName="selected" to='/five'>User-5</NavLink></li>
        </ul>
      </div>

    </nav>

  )
}
export const CallTodos = () => {

  const [dataTodos, setDataTodos] = useState([])
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      try {
        const result = await axios('https://jsonplaceholder.typicode.com/todos')
        setDataTodos(result.data)
      } catch (error) {
        setIsError(true)
        console.log(error)

      }
    }
    fetchData()
  }, [])


  return (
    <div>
      <NavBar />
      <div className='card-columns'><Routes data={dataTodos} /></div>
      {isError && <h3 className='mt-3'>Quelque chose semble perturber l'appel de l'API une erreur est survenue - Voir la console pour plus de détail sur le problème ...</h3>}
    </div>
  )
}

