import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorP, setErrorP] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let navigate = useNavigate();
    let location = useLocation();


    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const formSubmiteButton = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setErrorP("two password didn't match")
            return;
        }
        if (password.length && confirmPassword.length < 6) {
            setErrorP('Password should be at least 6 characters')
        }
        if (user) {
            setErrorP('user already exist')
        }
        if (error) {
            return (

                <p> {error?.message}</p>

            )
        }
        else {
            createUserWithEmailAndPassword(email, password)
            setErrorP('');
            let from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
        }
    }
    return (
        <div>
            <h3 className='text-center mt-2'>Resister</h3>
            <Form onSubmit={formSubmiteButton} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handelConfirmPasswordBlur} type="password" placeholder="Confirm-Password" required />
                </Form.Group>
                <p className='text-danger'>{errorP}</p>
                <p>Already have an account? <Link className='text-decoration-none' to='/login'>Please login</Link></p>
                <Button variant="primary" type="submit">
                    Register
                </Button>

                <p className='text-danger'>{error?.message}</p>
            </Form>

        </div>
    );
};

export default SignUp;