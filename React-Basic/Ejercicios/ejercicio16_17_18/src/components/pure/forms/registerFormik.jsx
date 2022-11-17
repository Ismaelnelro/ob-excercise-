import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();


    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }


    const registerSchema = Yup.object().shape(
        {
            userName: Yup.string().min(6, 'Too Short').max(20, 'Too Long').required('UserName is required'),
            email: Yup.string().email('Invalid email Format').required('Email is Required'),
            password: Yup.string().min(6,'Password Too Short').required('Password is Required'),
            confirm: Yup.string()
                .when("password",{ 
                    is: value => (value && value.lenght > 0 ? true : false),
                    then: Yup.string().oneOf
                    ([Yup.ref('password')],
                    'password must much!') 
                }).required('You must confirm the password!')
                // role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/ Admin').required('Role is Requiered!'),
        }
    )

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                }}
            >

                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="userName">Name</label>
                        <Field id="userName" type="text" name="userName" placeholder="Your Name" />
                        {/* Manejo de error de userName */}
                        {
                            errors.userName && touched.userName &&
                            (
                                <ErrorMessage name="userName" component='div' />
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Manejo de error de email */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div' />
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" type="password" name="password" placeholder="Your Password" />
                        {/* Manejo de error de password */}
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div' />
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field id="confirm" type="password" name="confirm" placeholder="Confirm your Password" />
                        {/* Manejo de error de password */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name="confirm" component='div' />
                            )
                        }


                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p> Login yout credentials..</p>) : null}
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
