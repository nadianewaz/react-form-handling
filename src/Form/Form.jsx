import React from 'react';
import { useState } from 'react';
import "./Form.css";

const Form = () => {
    let [username, setUsername] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        alert(username)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
         <div className="box">
            <input type="text" placeholder='username' 
            value={username}
            // onChange={ (e) => setUsername(e.target.value)}
            onChange = { (e) =>  setUsername(e.target.value)  }


            />
            <button type="submit">click</button>
         </div>
         </form>




            
        </>
    );
};

export default Form;