import React from 'react'
import { Link } from 'react-router-dom'
import auth from './auth'

const About = (props) => {

    return (
        <div>About us

<Link to= "/hook">
                Got to hook
            </Link>
            <button onClick = {() => {props.history.push('/hook')}} ></button>
            <button onClick = {() => {auth.logout(() => {props.history.push('/')})}} >Logout</button>
        </div>
    )
}

export default About