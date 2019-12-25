import React from 'react'
import {Home} from '../view/Home'
import {About} from '../view/About'
import {Contact} from '../view/Contact'
import { Switch, Route } from 'react-router-dom'

export const RouteBody = ()=>{
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
            {/* <Home></Home>
            <About></About>
            <Contact></Contact> */}
        </div>
    )
}