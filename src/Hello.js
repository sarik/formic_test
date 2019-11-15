import React,{useRef, useEffect ,useState} from 'react';

window.pr = process.env
const Hello = () => {

    const countr = useRef(0);

    const [counter,setCounter] = useState(0)
    useEffect(() => {
        console.log('abc')
        console.log('def')
          
        new Promise((res,rej) => setTimeout(()=>{res(22)},4000)).then(console.log)
        return (() => console.log('unmounting'))
    },[counter])

    console.log(countr.current)
    console.log(countr.current++,"*****")
    return (<div>Hello my man

        <button onClick = {() => setCounter(counter+1)}>Increment</button>
    </div>)
}

export default Hello ;