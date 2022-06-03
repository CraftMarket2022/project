import React, {useState} from 'react'

import axios from 'axios';

export const Register = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState('');

    const sendData = () => {
        
    }

    return (
        <div>
            <form>
                <input type='text' onChange={(event)=>{
                    setUserName(event.target.value);
                } } placeholder='Username' />

                <input type='email' onChange={(event) => {
                    setEmail(event.target.value);
                }} placeholder='password'/>

                <input type='number' onChange={(event) => {
                    setPhone(event.target.value);
                }} placeholder='phone number'/>

                <input type='password' onChange={(event) => {
                    setPassword(event.target.value);
                }} placeholder='email'/>

                
                <button type='submit' onClick={sendData}>Submit</button>

            </form>
        </div>
    )
}
