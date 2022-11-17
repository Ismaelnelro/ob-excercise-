/*Este formulario me permitira trabajar con los datos para crear una nueva tarea para tasklist*/
import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';


const TaskForm = ({ add, length }) => {

  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const notaRef = useRef('')
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      notaRef.current.value,
      false,
      levelRef.current.value
    )

    add(newTask);
  }

  const normalStyle={
    color:'blue',
    fontWeight:'bold'
  }
  const urgentStyle={
    color:'yellow',
    fontWeight:'bold'
  }

  const blockingStyle={
    color:'tomato',
    fontWeight:'bold'
  }


  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>

        <input type="text" ref={nameRef} id="inputName" className='form-control form-contro-lg' required autoFocus placeholder='Task name' />
        <input type="text" ref={descriptionRef} id="inputDescription" className='form-control form-contro-lg' required placeholder='Task description' />
        <input type="text" ref={notaRef} id="inputNota" className='form-control form-contro-lg' required placeholder='Task note' />
        <select ref={levelRef} className='form-control form-contro-lg' defaultValue={LEVELS.NORMAL} name="" id="selectLevel">
          <option style={normalStyle}   value={LEVELS.NORMAL}>   Normal </option>
          <option style={urgentStyle}   value={LEVELS.URGENT}>   Urgente</option>
          <option style={blockingStyle} value={LEVELS.BLOCKING}> Bloking</option>
        </select>
        <button type="submit" className='btn btn-success btn-lg ms-3'>
          {length > 0 ? 'Add Task' : 'Create your new Task'}
        </button>
      </div>
    </form>
  )
}

TaskForm.protoTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm;
