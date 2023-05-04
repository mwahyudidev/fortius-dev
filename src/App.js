import React from 'react'
import { Route, Switch } from 'react-router-dom';
// We will create these two pages in a moment
import Payment from './pages/Payment';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Payment} />
      {/* <Route path="/:id" component={UserPage} /> */}
    </Switch>
  )
}