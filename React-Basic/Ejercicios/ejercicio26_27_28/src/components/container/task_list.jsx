import React, { useContext, useReducer, useRef } from 'react';
import { LEVELS } from '../../models/levels.enum';
import TaskComponents from '../pure/task';


const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'
const TOGGLE = 'TOGGLE_TASK'


export const myContext = React.createContext(null);


const TaskList = () => {

    // initial State
    const initialState = [];


    //  Reducer
    const reducerTask = (state, action) => {
        switch (action.type) {
            case ADD_TASK:
                return [
                    ...state,
                    {
                        id: state.length,
                        name: action.payload.name,
                        description: action.payload.description,
                        level: action.payload.level,
                        completed: false
                    }
                ]
            case DELETE_TASK:
                return state.filter((task) => task.id !== action.payload.id);

            case TOGGLE:
                return state.map(task =>
                    (task.id === action.payload.id)
                        ?
                        {
                            ...task,
                            completed: !task.completed
                        } :
                        task
                )

            default:
                return state;
        }
    }


    const [state, dispatch] = useReducer(reducerTask, initialState)
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)


    function deletedTask(task) {
        dispatch(
            {
                type: DELETE_TASK,
                payload: {
                    id: task.id
                }

            }
        )
    }

    function completeTask(task) {
        dispatch(
            {
                type: TOGGLE,
                payload: {
                    id: task.id
                }
            }
        )
    }


    return (
        <myContext.Provider value={state}>
            <div>
                <h4>
                    TASK
                </h4>
                <input type="text" ref={nameRef} id="" placeholder='name' />
                <input type="text" ref={descriptionRef} id="" placeholder='name' />
                <select ref={levelRef} name="" id="" defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>NORMAL</option>
                    <option value={LEVELS.URGENT}>URGENT</option>
                    <option value={LEVELS.BLOCKING}>BLOKING</option>
                </select>
                <button
                    onClick={
                        () => dispatch({
                            type: ADD_TASK,
                            payload: {
                                name: nameRef.current.value,
                                description: descriptionRef.current.value,
                                level: levelRef.current.value,
                            }
                        }
                        )}
                >Add task
                </button>

                <TaskComponents deleted={deletedTask} completed={completeTask} />

            </div >
        </myContext.Provider>

    );
};
export default TaskList;
