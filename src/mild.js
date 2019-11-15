import React,{useRef,useState} from 'react'

const Mild = React.memo((props) => {

    const y = useRef(0);

    console.log(y.current++,'from mild')
    const [you,setYou] = useState(9)

    return (
        <div>


Mild
    <button onClick = {() => setYou(you+3)}>ge out{you}</button>
<button onClick = {() => props.chj(you)}>Outer</button>
Mild

        </div>
    )
})

export default Mild;