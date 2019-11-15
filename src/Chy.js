import React , {useCallback,useState} from 'react'

import Child from './child'


const Chy = () => {

    const [count,setCount] = useState(0)

    const toDo = useCallback(() => {console.log('inside callback');return setCount(c => c+1)}, [setCount])

    const memoedData = React.useMemo(() => 22,[count])
  


    return (
        <div>
            {count}
           
            <button onClick = {() => setCount(count+1)}>Increment counter</button>
<Child do = {memoedData}/>

        </div>
    )
}

export default Chy;