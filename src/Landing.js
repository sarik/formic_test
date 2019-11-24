import React from 'react'
import auth from './auth'

const Landing = (props) => {
    return(<div> Landing

        <button onClick={() => { auth.login(() => {props.history.push('/about')}) }}>Login</button>
    </div >)
}

export default Landing