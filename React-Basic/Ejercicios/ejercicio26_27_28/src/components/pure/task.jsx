import React, { useContext } from 'react';
import '../../styles/task.css'
import { myContext } from '../container/task_list';


const DELETE_TASK = 'DELETE_TASK'
const TOGGLE = 'TOGGLE_TASK'

const TaskComponents = ({ deleted, completed }) => {
    const state = useContext(myContext)

    return (
        <div>
            {state.map((task, index) => (
                <div key={index}>
                    <table className='text-center '>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>{task.level}</td>
                            </tr>
                        </tbody>
                    </table>
                    {
                        task.completed ?
                            (
                                <button className='btn btn-sm btn-secondary mx-2' onClick={() => deleted(task)}>eliminar</button>
                            ) : null

                    }
                    <button  className={task.completed?"btn btn-sm btn-primary":"btn btn-sm btn-danger"}  onClick={() => completed(task)}>{task.completed? 'disable delete': 'enable delete'}</button>
                </div>
            ))}

        </div>
    );
};

export default TaskComponents;


