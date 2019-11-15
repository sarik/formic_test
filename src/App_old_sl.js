import React, { useState,useEffect } from 'react';
import useFrom, { useForm } from './useFrom';

import './App.css';
import Hello from './Hello';
import Stt from './Stt';



const  App = (props) => {
    const [t, setT] = useState("");
    const  [val,setVal]        = useForm({pak:'pak'})

    const [showHello, setShowHello] = useState(true);
    const [showH, setShowH] = useState(0);

    useEffect(() => {
      console.log('checking useeffect for just setstate func');

      return ()=>{console.log('cleanup')}  
    },[showH]
    )
    return (

      <div>
            <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello/>}
        {showHello && <Stt/>}
          {/*   <textarea value={t} onChange={e => setT(e.target.value)} />  */}
          <textarea value={t} onChange={setVal} /> 
         
          <button onClick = {setVal}>outside</button>
            <form onSubmit = {e => {e.preventDefault()}}>
                <button onClick = {setVal}>inside</button>

    <button onClick = {() => setShowH(

      (p) => (p%2 == 0) ? (p+1):  p
      ) }>checking ref calling set state{showH}</button>

    And{showH}
            
            </form>
            <div >{t}</div>>
      
      
    </div>
    );
}

export default App;
