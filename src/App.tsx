// eslint-disable-next-line no-use-before-define
import React from 'react'
import Header from './components/header/Header'
import IndexUI from './pages/index'
import TodoUI from './pages/todo/todoUI'
import {
  Router,
  Switch,
  Route
} from 'wouter'
import LoginUI from './pages/login/loginUI'
import RegisterUI from './pages/register/registerUI'

function App () {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/dashboard" component={() => <TodoUI/>}/>
        <Route path="/login" component={() => <LoginUI/>}/>
        <Route path="/register" component={() => <RegisterUI/>}/>
        <Route path="/">
          <IndexUI/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
