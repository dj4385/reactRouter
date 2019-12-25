import React from 'react'
import {Header} from '../components/Header'
import { RouteBody } from '../components/RouteBody'

export const RouteContainer = ()=>{
    return(
        <div>
            <Header></Header>
            <RouteBody></RouteBody>
        </div>
    )
}