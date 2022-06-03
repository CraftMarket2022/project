import React, { useState } from 'react'

import axios from 'axios';

export const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    
    const sendData = async () => {
        const user = {
            'username' : userName,
            'password' : password
        }
        try {
            const res = await axios.post('https://localhost/login', user);
            console.log(res.data);
            setLoggedIn(true);
        } catch (err) {
            console.log(err);
        }
    }

    // const sendData = () => {
    //     const user = {
    //         'username' : userName,
    //         'password' : password
    //     }
    //     axios.post("http://localhost:3001/register", user).then((res) => {
            
    //     }, (errRes) => {
    //         console.log(errRes);
    //     })
    // }

    return (
        <div>
            <form>
                <input type='text' onChange={(event)=>{
                    setUserName(event.target.value);
                } } placeholder='Username' />
                <input type='password' onChange={(event) => {
                    setPassword(event.target.value);
                }} placeholder='password'/>
                <button type='submit' onClick={sendData}>Submit</button>
            </form>
        </div>
    )
}
