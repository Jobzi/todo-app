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
import Error404 from './pages/Error404'

function App () {
  return (
    <>
    <UserContextProvider>
      <Header/>
      <Switch>
        <Route path="/" component={IndexUI}/>
        <Route path="/dashboard" component={() => <TodoUI/>}/>
        <Route path="/login" component={() => <LoginUI/>}/>
        <Route path="/register" component={() => <RegisterUI/>}/>
        <Route path ='/:rest*' component={Error404}/>
      </Switch>
    </UserContextProvider>
    </>
  )
}

export default App
