import React from 'react';

const AsyncExample = () => {



    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);
        return Promise.resolve(sessionStorage.getItem(key));
    }


    function showStorage() {
        saveSessionStorage('name', 'Ismael')
            .then((res) => { let value = res; alert(value) })
            .catch((err) => alert(err))
            .finally(() => console.log('Name save and retreived sucessfully'));
    }



    return (
        <div>
            <h1>Async, Promise Example</h1>
            <button onClick={showStorage}>Save Name and Show </button>
        </div>
    );
}

export default AsyncExample;
