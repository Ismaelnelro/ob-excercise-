import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'
const TaskDetailpage = ({ task }) => {
    const { id } = useParams()
    const navigator = useNavigate();

    function navigatorProps(path) {

        navigator({
            pathname: path,
            search: '?online= true',
        })
    }
    
    return (
        <div>
            <h1> Details -{id}-</h1>
            <h2>{task.name}</h2>
            <h4>{task.description}</h4>
        </div>
    );
}

export default TaskDetailpage;
