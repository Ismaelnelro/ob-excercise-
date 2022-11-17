import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskformik = ({ add, length }) => {

    const initialCredential = {
        name: '',
        description: '',
        note: '',
        completed: false,
        level: LEVELS.NORMAL
    }


    const taskSchema = Yup.object().shape(
        {
            name: Yup.string()
                .max(22, 'Task too long')
                .required('Task Name is required'),
            description: Yup.string()
                .max(30, 'Description too long')
                .required('Description is required'),
            note: Yup.string()
                .max(22, 'Note too long')
                .required('Note is required'),
            completed: Yup.boolean()
                .required('is required'),
            level: Yup.string().oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'You must select a level priority')

        }
    )

    function addTask(value) {

        const newTask = new Task(
            value.name,
            value.description,
            value.note,
            value.completed,
            value.level
        )

        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }


    return (
        <div className='col-12 d-flex justify-content-center'>
            <Formik
                initialValues={initialCredential}
                validationSchema={taskSchema}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        addTask(values)
                        actions.setSubmitting(false);
                    }, 1000)
                }}
            >
                {
                    ({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                        <Form className='d-flex flex-column m-4 col-6'>
                            {/* TaskName && Error */}
                            <Field id="name" type="text" name="name" placeholder="Task Name" />
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name="name" component='div' />
                                )
                            }

                            {/* Description && Error */}
                            <Field id="description" type="text" name="description" placeholder="Add a description" />
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name="description" component='div' />
                                )
                            }


                            {/* Note && Error */}
                            <Field id="note" type="text" name="note" placeholder="Add note" />
                            {
                                errors.note && touched.note &&
                                (
                                    <ErrorMessage name="note" component='div' />
                                )
                            }


                            {/* Level && Error */}
                            <Field as="select" name="priority" defaultValue={LEVELS.NORMAL}>
                                <option style={normalStyle} value={LEVELS.NORMAL}>   Normal </option>
                                <option style={urgentStyle} value={LEVELS.URGENT}>   Urgente</option>
                                <option style={blockingStyle} value={LEVELS.BLOCKING}> Bloking</option>
                            </Field>
                            {
                                errors.level && touched.level &&
                                (
                                    <ErrorMessage name="level" component='div' />
                                )
                            }

                            <button type="submit" className='btn btn-success btn-lg mt-2'>
                                {length > 0 ? 'Add Task' : 'Create your new Task'}
                            </button>
                            {isSubmitting ? (<p> Adding new Task..</p>) : null}
                        </Form>
                    )
                }
            </Formik>
        </div >
    );
}

export default Taskformik;
