// custom hooks for fetching a data.... 
import { useEffect, useState } from "react";
const useFetch = (url) =>{
    const [data, setdata] = useState(null)

    // useState for loading messages ... 
    const [isPending, setisPending] = useState(true)
    // useState for errors....
    const [error, seterror] = useState(null)
    useEffect(() => {
        const Abortcont = new AbortController()
        setTimeout(() => {
            fetch(url, {signal: Abortcont.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for the resource')
                    }
                    return res.json()

                })
                .then(data => {
                    console.log(data)
                    setdata(data)
                    setisPending(false)
                    seterror(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Fetch aborted')
                    }else{
                        seterror(err.message)
                        setisPending(false)
                    }
                    
                })
        }, 1000)
        return ()=>Abortcont.abort()
    },[url])
    return {data, isPending, error }

}

export default useFetch;