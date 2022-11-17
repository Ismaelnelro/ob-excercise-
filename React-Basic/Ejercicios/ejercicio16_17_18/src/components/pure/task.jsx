import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum';


const TaskComponents = ({ task , complete, remove }) => {

    useEffect(() => {
        console.log("Tarea creada");
        return () => {
            console.log(`Task ${task.name} is going to unmount`);
        };

    }, [task])

    /**
     *Function that returns a Badge depending on the level of the task
     */
    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>{task.level} </span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>{task.level} </span>
                    </h6>
                );

            case LEVELS.BLOCKING:
                return (
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>{task.level} </span>
                    </h6>
                );
            default:
                break;
        }
    }

    /**
   *Function that returns a icon depending if the task is completed or not
   */
    function taskIconCompleted() {
        if (task.completed) {
            return (<i onClick={()=> complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={()=> complete(task)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    //Alternativa para dar estilos 
    const taskCompleted ={
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }
    //Alternativa para dar estilos 
    const taskPending ={
        fontWeight: 'bold',
        color:'tomato'
    }


    return (
        // <tr className='fw-normal' className={task.completed ?'task-completed' :'task-pending'}> ==> Esta usa estilos del css
        <tr className='fw-normal' style={(task.completed)? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>
                    {task.name}
                </span>
            </th>
            <td>
                <span className='align-middle'>
                    {task.description}
                </span>
            </td>
            <td>
                <span className='align-middle'>
                    {task.note}
                </span>
            </td>
            <td>
                {/* Execution of function to return badge elemt */}
                {taskLevelBadge()}
            </td>

            <td className='align-middle'>
                {/* Execution of function to return  completed or not*/}
                {taskIconCompleted()}
                <i className='bi-trash task-action' onClick={()=> remove(task)} style={{ color: 'tomato' }}></i>
            </td>
        </tr>

    );
};


TaskComponents.propTypes = {
    task: PropTypes.instanceOf(Task),
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponents;


