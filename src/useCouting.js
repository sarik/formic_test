import {useRef} from 'react'

const useCouting = () => {
    const cc = useRef(0)

    return cc.current++;
}

export default useCouting