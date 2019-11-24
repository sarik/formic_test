import { Route } from 'react-router-dom'
import React from 'react'
import auth from  './auth'
import Landing from './Landing'

const ProtectedRoute = ({ component: Component, children,...rest }) =>{
console.log(children,'chid')
    return (
    <div>
        {children('chjk')}
    <Route {...rest} render={
        ({...props}) => {
            console.log('props from pc render',props)
            if (auth.authenticated)
            return (<Component care= 'dont' {...props} />)
            else
            return (<div>Please Login <Landing {...props} />   </div>)

        }
    } />
    </div>)
} 


export default ProtectedRoute