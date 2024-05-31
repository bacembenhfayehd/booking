import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function RegisterPage(){
    const [name,SetName]= useState('');
    const [email,SetEmail]= useState('');
    const [password,SetPassword]= useState('');

    async function registerUser(ev){
        ev.preventDefault();

        try {

            await axios.post('/register',{
                name,
                email,
                password,
            });
    
            alert('Registration successful. Now you can login');

        } catch (e) {


            alert('Registration failed. Please try again later');



        }
       
    
    
    }
    return (
    
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4 ">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
            <input type="text" placeholder="Bacem Ben" 
            value={name} 
            onChange={ev => SetName(ev.target.value)} />
                <input type="email" placeholder="your@email.com" 
                value={email} 
                onChange={ev => SetEmail(ev.target.value)} />
                <input type="password" placeholder="your password" 
                value={password} 
                onChange={ev => SetPassword(ev.target.value)}/>
                <button className="primary ">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member ? <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>
            </form>
            </div>
            
        </div>


    );
        
}