import React, {useState, useCallback} from 'react'
import {Square, Sqaure} from './Sqaure';

 const Grap = () => {

    const fav =[1,4,8]
    const [counter ,setCounter] = useState(0);
    const yy=23
    

    const increment = useCallback((n) => {
        setCounter(p => p+n)
    },[setCounter])

    return(
        <div>

without call,render all child everytime counter changes since it rerenders and even though sqaure child contains
React.memo, it rebuilds since we are passing counter in function
{/* {fav.map((f,i) => <Sqaure  key = {i} change = {() => setCounter(counter+f)} n = {f}/>)}  */}


child rerenders for this too everytime,as previous state p is also counter
{/*   {fav.map((f,i) => <Sqaure  key = {i} change = {() => setCounter(p => p+9)} n = {f}/>)}  */}

child doesnt rerender everytime since function passed as props doesnt depend on previous state.
It takes as argument previous state but doesnt uses it
  {/*   {fav.map((f,i) => <Sqaure  key = {i} change = {() => setCounter(p => 2+9)} n = {f}/>)}   */}



  {fav.map((f,i) => <Sqaure  key = {i} change = {increment} n = {f}/>)} 


<hr/>
{counter}
        </div>
    )
}

export default Grap;