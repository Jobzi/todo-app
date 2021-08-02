// eslint-disable-next-line no-use-before-define
import React from 'react'
import Header from './components/header/Header'
import IndexUI from './pages/index'
import TodoUI from './pages/todo/todoUI'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginUI from './pages/login/loginUI'
import RegisterUI from './pages/register/registerUI'
import './App.css'

function App () {
  return (
    <>
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
    </>
  )
}

export default App
