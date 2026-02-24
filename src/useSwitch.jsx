import { useCallback, useState } from "react";



export default function useSwitch(initialValue = false) {
    const [value, setValue] = useState(initialValue)
    const toggle = useCallback(() => {
        setValue(prev => !prev)
    }, [])
    return [value, toggle]

}