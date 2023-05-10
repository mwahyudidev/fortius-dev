import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import Payment from './pages/Payment'
import Home from './pages/Home'
import Attendance from './pages/Attendance'
import Leaves from './pages/Leaves'
import Employees from './pages/Employees'
import Payroll from './pages/Payroll'
import Schedule from './pages/Schedule'
import Settings from './pages/Settings'
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  return (
    <ChakraProvider>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/attendance" component={Attendance} />
      <Route path="/leaves" component={Leaves} />
      <Route path="/employees" component={Employees} />
      <Route path="/payroll" component={Payroll} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/settings" component={Settings} />
    </Switch>
    </ChakraProvider>
  )
}