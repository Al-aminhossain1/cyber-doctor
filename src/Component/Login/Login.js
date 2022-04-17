import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [login, setLogin] = useState('false')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorP, setErrorP] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    // const navigate = useNavigate()
    // const handelRegister = () => {
    //     navigate('/signup')
    // }
    // let navigate = useNavigate();
    // let location = useLocation();
    // let auth = useAuthState();


    const formSubmiteButton = event => {
        event.preventDefault()
        if (login) {
            setErrorP("User not Found, Register frist")
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <h3 className='text-center mt-2'>{login ? "Log In" : "Resister"}</h3>
            <Form onSubmit={formSubmiteButton} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                {!login && <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>}
                <p>New to Cyber doctor? <Link className='text-decoration-none' to='/signup'>create an account</Link></p>
                <p className='text-danger'>{errorP}</p>
                <Button variant="primary" type="submit">
                    {login ? 'Login' : 'Resister'}
                </Button>
            </Form>
        </div>
    );
};

export default Login;