import {useRef} from 'react'

export const useCountRenders = () => {

    const ref = useRef(0)

    console.log(ref.current++)
}