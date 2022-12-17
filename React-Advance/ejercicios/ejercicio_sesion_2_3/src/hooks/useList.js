import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };


    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    const clearList = () => {
        setValue("")
    }

    const sortList = () => {
        const arr = [...value];
        if (typeof arr[1] === 'number') {
            setValue(arr.sort((a,b)=> a-b))
            return
        }
        //ordena por unicode
        setValue(arr.sort())
    }
    
    const reversList =()=>{
        const arr = [...value];
        setValue(arr.reverse())
    }


    const reset =()=>{
        setValue(initialValue)
    }



    return {
        value, setValue, push, remove, isEmpty, clearList, sortList,reversList,reset,
    };
};

export default useList;

