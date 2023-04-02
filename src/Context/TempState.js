import React, { useEffect, useState } from 'react'
import TempContext from './TempContext'

function TempState(props) {
    let localValue = localStorage.getItem("value")
    const [value, setValue] = useState(localValue);
    useEffect(() => {
        if (localStorage.getItem("value") === null) {
            setValue("Bangalore");
        }
    }, [])

    return (
        <>
            <TempContext.Provider value={{ value, setValue }}>
                {props.children}
            </TempContext.Provider>
        </>
    )
}

export default TempState
