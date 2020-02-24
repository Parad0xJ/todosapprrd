import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage } from './HomePage'
import { UserOne, UserTwo, UserThree, UserFour, UserFive } from './Users'

export const Routes = props => {
  const user1 = props.data.filter(elt => elt.userId === 1)
  const user2 = props.data.filter(elt => elt.userId === 2)
  const user3 = props.data.filter(elt => elt.userId === 3)
  const user4 = props.data.filter(elt => elt.userId === 4)
  const user5 = props.data.filter(elt => elt.userId === 5)
  return (
    <Switch>
      <Route exact path='/' ><HomePage /></Route>
      <Route path='/one'><UserOne allTodos={user1} /></Route>
      <Route path='/two'><UserTwo allTodos={user2} /></Route>
      <Route path='/three'><UserThree allTodos={user3} /></Route>
      <Route path='/four'><UserFour allTodos={user4} /></Route>
      <Route path='/five'><UserFive allTodos={user5} /></Route>
    </Switch>

  )
} 