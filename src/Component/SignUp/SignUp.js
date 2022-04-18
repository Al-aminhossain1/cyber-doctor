import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { Link, useNavigate } from 'react-router-dom';
import google1 from '../../images/icon/google1.png'


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

    const [signInWithGoogle,] = useSignInWithGoogle(auth);
    let loginError;
    let navigate = useNavigate();


    if (user) {
        navigate('/checkout')
    }
    if (error) {
        loginError = <p> {error?.message}</p>


    }

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handelConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const createUserWithEmailPassword = event => {
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

        else {
            createUserWithEmailAndPassword(email, password)
            setErrorP('');

        }

    }
    // SignIn with Google
    const handelGoogleSignin = () => {
        signInWithGoogle()

    }
    return (
        <div>
            <h3 className='text-center mt-2'>Resister</h3>
            <Form onSubmit={createUserWithEmailPassword} className='w-50 mx-auto'>
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

                <p className='text-danger'>{loginError}</p>
            </Form>
            <div className='d-flex mx-auto'>
                <div className='w-25 h-.5 border border-1  '>

                </div>
                <div>
                    <p>or</p>
                </div>
                <div className='w-25 h-.5 border border-1 '>

                </div>
            </div>
            <div className='text-center mt-3 '>
                <button onClick={handelGoogleSignin} className='px-5 py-2 border border-0 rounded-3 bg-primary text-light'>
                    <img className='w-5 pe-2' src={google1} alt="" /> Google Signup
                </button>

            </div>
        </div>

    );
};

export default SignUp;