import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google1 from '../../images/icon/google1.png'
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    let navigate = useNavigate()
    const location = useLocation()

    const [login, setLogin] = useState('false')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorP, setErrorP] = useState('')
    let from = location.state?.from?.pathname || "/";
    let logerror;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle,] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    // const navigate = useNavigate()
    // const handelRegister = () => {
    //     navigate('/signup')
    // }

    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        logerror = <div>
            <p> error: {error?.message}</p>
        </div>
    }

    const handelEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (loading) {
        return <Loading></Loading>
    }
    const userSignIn = event => {
        event.preventDefault()

        if (!user) {
            setErrorP("User not Found, Register frist")
        }

        signInWithEmailAndPassword(email, password)

    }
    // Reset Password
    const resetPassword = (event) => {
        setEmail(event.target.value);
        sendPasswordResetEmail(email);
        alert('Sent email');
    }


    //  SignIn with Google
    const handelGoogleSignin = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <h3 className='text-center mt-2'>{login ? "Log In" : "Resister"}</h3>
            <Form onSubmit={userSignIn} className='w-50 mx-auto'>
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
                <p>New to Cyber doctor? <Link className='text-decoration-none' to='/signup'>create an account</Link></p>
                <button onClick={resetPassword} className='btn btn-link text-decoration-none' >Forget password</button>

                <p className='text-danger'>{errorP}</p>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center text-danger'>{logerror}</p>
            <div className='text-center mt-3 '>
                <button onClick={handelGoogleSignin} className='px-5 py-2 border border-0 rounded-3 bg-primary text-light'>
                    <img className='w-5 pe-2' src={google1} alt="" /> Google SignIn
                </button>

            </div>
        </div>
    );
};

export default Login;