/*export function SignUp(){
    return <h1>Sign Up!!</h1>
}
import React from 'react' 
import './CSS/login.css'
const LogIn = () => {
    return (
        <div className='LogIn'>
            <div className="login-container">
                <h1>Sign Up</h1>
                <div className="login-fields">
                    <input type="text" placeholder="Your Name" />
                    <input type="number" placeholder="Your Age" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="login-login">Already have an account? <span>Login here</span></p>
            </div>
        </div>
    )
}*/

// LogIn.tsx

import React from 'react';
import './CSS/login.css';

const LogIn: React.FC = () => {
    return (
    <div className='LogIn'>
        <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
            <input type="text" placeholder="Your Name" />
            <input type="number" placeholder="Your Age" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-login">Already have an account? <span>Login here</span></p>
        </div>
    </div>
    );
};

export default LogIn;
