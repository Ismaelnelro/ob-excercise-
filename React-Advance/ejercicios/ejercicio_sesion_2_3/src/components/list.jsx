import React from 'react'
import useList from '../hooks/useList'

const initialValue = ['Rosana', 'Ismael', 'Maira', 'Ivana', 'Mica', 'Ruben', 'Gael'];


export const List = () => {
    // const { value, clearList, sortList } = useList([10,20,30,5,100])
    const { value, clearList, sortList,reversList,reset} = useList(initialValue)
    return (
        <>
            <h2>List</h2>
            <ul>
                {value ? value.map((names, index) => (
                    <li key={index}>
                        {names}
                    </li>
                )): (<p>Reset List</p>
                )}
            </ul>
            <div className='btn_container'>
                <button onClick={sortList}>Sort</button>
                <button onClick={reversList}>Revers</button>
                <button onClick={clearList}>Clear</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}