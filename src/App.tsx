// eslint-disable-next-line no-use-before-define
import React from 'react'
import Header from './components/header/Header'
import IndexUI from './pages/index'
import TodoUI from './pages/todo/todoUI'
import { Switch, Route } from 'wouter'
import LoginUI from './pages/login/loginUI'
import RegisterUI from './pages/register/registerUI'
import './App.css'
import { UserContextProvider } from './context/userContext'

function App () {
  return (
    <>
    <UserContextProvider>
      <Header/>
      <Switch>
        <Route path="/dashboard" component={() => <TodoUI/>}/>
        <Route path="/login" component={() => <LoginUI/>}/>
        <Route path="/register" component={() => <RegisterUI/>}/>
        <Route path="/" component={IndexUI}/>
      </Switch>
    </UserContextProvider>
    </>
  )
}

export default App
