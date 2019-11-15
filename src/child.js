import React,{useRef,useState} from 'react'

const Child = React.memo((props) => {

    const y = useRef(0);

    console.log(y.current++,'from mild')
    const [you,setYou] = useState(9)

    return (
        <div>
Child here 
 
<button onClick = {props.change}>from child</button>
        </div>
    )
})

export default Child;