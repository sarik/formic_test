import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useHook from './useHook'
const myPromise = () => {
    return new Promise((res, rej) => setTimeout(() => { res('Resolved') }, 4000))
}

const Hook = (props) => {

    const [status, setStatus] = useState('resolving');
  
    const showingNow  = useHook(status)

    useEffect(() => {

        console.log('inside same effect')


        return  function(){console.log('exiting')}
     //   myPromise().then(res => { console.log('exiting same');})

    },[status])

    useEffect(() => {

        console.log('mounting')


         return function(){console.log('unmouting')}
       

    },[])


    return (
        <div> Status::{status} <br/>
        Shwoing now ::{showingNow}<br/>

            <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
         {/*    <button onClick={() => { props.history.push('/') }} ></button> */}
        </div>
    )





}

export default Hook;