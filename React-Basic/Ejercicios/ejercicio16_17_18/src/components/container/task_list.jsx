import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponents from '../pure/task';
import TaskForm from '../pure/forms/taskForm';

const TaskList = () => {
    const defaultTask1 = new Task('Estudiar JS', 'Ver bucles', 'Finalizar en la manana', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Estudiar React', 'Ver UseState', 'Finalizar en la manana', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Repasar', 'Realizar ejecicio usando UseState', 'Finalizar en la tarde', false, LEVELS.BLOCKING);

    const [tasks, settask] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [laoding, setLoading] = useState(true)

    // Control del ciclo de vida
    useEffect(() => {
        console.log('Task state has benn modified');
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('Task component is goin to unmount');

        };
    }, [tasks])

    function completeTask(task) {
        console.log('task completada', task);
        const index = tasks.indexOf(task);
        // una vez obtenido no podemos modificar sobre el propio state debemos crear una variable tempora
        // que contenga toda las tareas
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // luego debemos anhadirlo al setTask la nueva lsita actualizada
        settask(tempTasks);
    }

    function deleteTask(task) {
        console.log('task deleted', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1) // Aqui indeicamos el indice de la tarea y la cantidad
        settask(tempTasks);
    }


    function createTask(task) {
        console.log('add Task', task);
        const tempTasks = [...tasks];
        tempTasks.push(task)
        settask(tempTasks)
    }


    const Table = () => {
        return (
            <table>
                <thead className='text-dark'>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Note</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-dark'>
                    {
                        tasks.map((task, index) => {
                            return (
                                <TaskComponents task={task} key={index} complete={completeTask} remove={deleteTask} />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table />
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to show!</h3>
                <h4>Please, create one</h4>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    {/* Card Body */}
                    <div className='card-body text-dark' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>

                        { laoding ? (<p>Loading..</p>):tasksTable}

                    </div>
                </div>
            </div>
            <TaskForm add={createTask} length={tasks.length} />
        </div>
    );
};
export default TaskList;
