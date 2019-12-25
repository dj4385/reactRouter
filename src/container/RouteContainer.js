import React from 'react'
import {Header} from '../components/Header'
import { RouteBody } from '../components/RouteBody'

export default class RouteContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
   render(){
        return(
            <div>
                <Header></Header>
                <RouteBody></RouteBody>
            </div>
        )
    }
}