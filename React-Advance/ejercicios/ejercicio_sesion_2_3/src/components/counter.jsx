import { useCounter } from '../hooks/useCounter';

const initalValue = 0

export const Counter = () => {
    const { value,
        increment,
        decrement,
        reset } = useCounter(initalValue);

    return (
        <>
            <h1>Counter: {value}</h1>
            <div className='btn_container'>
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </>
    )
}