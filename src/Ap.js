import React, { useState } from 'react'

export const Ap = () => {

    const [st, setSt] = useState(0);
    return (

        (<div>
            {st}
            <button onClick={() => { setSt(st+1) }}>Check</button></div>)

    )
}