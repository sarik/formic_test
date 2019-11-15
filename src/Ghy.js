import React, { useState, useCallback,useRef ,useEffect} from 'react';
import Child from './child'
import Mild from './mild'
import useCouting from './useCouting'
const Grid = () => {

    const rows = 50;
    const cols = 50;
   const counter = useRef(0)
   //console.log(counter.current++)
    const g = useCouting()

   
 
    const [count, setCount] = useState(0)

    const cref = useRef(count)
    cref.current = count
    const [grid, setGrid] = useState(
        () => {
            const gr = []
            for (let i = 0; i < rows; i++) { gr.push(Array.from(Array(cols), () => 0)); }
            return gr;
        }
    )
    
    //creating a memoized version of setcount from lamba function
    useEffect(() => {console.log('check in useeffet')},[setCount])

    //just memoized method
   const usethis =  useCallback(() => {console.log('check in callback');
   //will not work if you give a state value like count,need to use a useref reference to keep track of count
   //because since callback is created just once, it will get hooked to count initial value of 0
   //setCount(count+3)},
   setCount(cref.current+3)},
   [setCount])

    const fun = useRef(grid)
   // console.log(fun.current)

    return (
        <>

        gg{g}jj<br/>
        {count}
        <Mild chj = {setCount} jj = {() => setCount(22)}/> 
        <Child change={usethis} /> 
<button onClick={() => setCount(count + 1)}>Increment{count}{counter.current} </button>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${rows}, 24px)` }}>

                {


                    grid.map((row, i) =>
                        row.map((col, j) => <div
                            onClick={e => setGrid(() => {
                                const newgr = []
                                for (let i = 0; i < rows; i++) { newgr.push(Array.from(Array(cols), () => 0)); }
                                newgr[i][j] = 1
                                return newgr;
                            })}
                            style={{
                                width: 20, height: 20,
                                textAlign: 'center',
                                backgroundColor: grid[i][j] ? '#555' : 'white',
                                color: grid[i][j] == 1 ? 'white' : 'pink',
                                border: `solid 1px ${grid[i][j] == 1 ? 'white' : 'black'}`
                            }}></div>))

                }

            </div>
        </>
    )

}

export default Grid;