import { useState } from 'react'

const values = {
    min: -10,
    max: 20
}

export const useCounter = (defaultValue = 0) => {
    const [value, setValue] = useState(defaultValue);

    const increment = () => {
        if (values.max === value) return
        setValue(value + 1)
    }


    const decrement = () => {
        if (values.min === value) return
        setValue(value - 1)
    }

    const reset = () => {
        setValue(0)
    }

    return {
        value,
        increment,
        decrement,
        reset
    }
}
