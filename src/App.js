import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Fruit from './views/Fruit'
import SingleFruit from './views/SingleFruit'


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Fruit} />
      <Route path="/:id" component={SingleFruit} />
    </Switch>
  )
}