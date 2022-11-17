
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email Format')
            .required('Email is Required'),
        password: Yup.string()
            .required('Password is Required')
    }
)


export const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                    localStorage.setItem('credentials', values);
                }}
            >
                {/* Aqui obtenemos las props de Formik para luego manejar los errores en el formulario */}
                {({ errors, touched, isSubmitting, values, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />

                        {/* Muestra errores de email */}
                        {
                            errors.email && touched.email &&
                            (
                                    <ErrorMessage name="email" component='div'/>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field id="password" type='password' name="password" placeholder="Password" />

                        {/* Muestra errores de password */}
                        {
                            errors.password && touched.password &&
                            (
                                <div>
                                    <ErrorMessage name="password" component='span'/>
                                </div>
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

