import React from 'react';
import { useCountRenders } from './useCountRender'
export const Sqaure = React.memo(({ change, n }) => {
    useCountRenders()
    return (
        <div>

            <div><button onClick={() => change(n)}>{n}</button></div>
        </div>
    )
}
)