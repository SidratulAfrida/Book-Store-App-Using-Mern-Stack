import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import googleLogo from "../assets/google-logo.svg";

const Signup = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                console.log('User signed up:', userCredential.user);
                alert("Sign up successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError('Failed to sign up. Please try again.');
                console.error('Error signing up:', error);
            });
    };

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(result => {
                console.log('User signed in with Google:', result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('Error during Google Sign-In:', error);
                setError('Failed to sign in with Google. Please try again.');
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <h1 className="text-2xl font-semibold">Sign up Form</h1>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                {error && <p className="text-red-500">{error}</p>}
                                <p>Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
                                <div className="relative">
                                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">
                                        Sign up
                                    </button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div>
                            <button onClick={handleGoogleSignIn} className='block'>
                                <img src={googleLogo} alt='Google logo' className='w-12 h-12 inline-block' />
                                Sign up with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
