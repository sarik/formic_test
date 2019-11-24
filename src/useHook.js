import { useState, useEffect } from 'react'

const myPromise = (txt) => {
    return new Promise((res, rej) => setTimeout(() => { res(`${txt}`) }, 2000))
}

const useHook = (txt) => {

    const [txtToShow, setTxtToShow] = useState('')
    useEffect(() => {

//cleanup
        setTxtToShow('Loading....')
        console.log('inside custom effect')

        //function to execute
       myPromise(txt).then(res => { console.log('exiting custom');setTxtToShow(res)})

    }, [txt])

    return txtToShow
}

export default useHook