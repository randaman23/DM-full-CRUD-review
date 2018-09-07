import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Profile from './components/Profile'
import Login from './components/Login'
import Feed from './components/Feed'
import AddPost from './components/AddPost'


export default (
    <Switch>
        <Route path="/" exact component={Feed}/>
        <Route path="/login" component={Login}/>
        <Route path="/add" component={AddPost}/>
        <Route path="/profile/:id" component={Profile}/>
    </Switch>
)
