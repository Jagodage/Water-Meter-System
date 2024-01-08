import React, { useState } from 'react'
import LoginImage from '../images/Login-img.svg';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Login = () => {
    const[email, setEmail] = useState('');
    const[Password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(['access_token']);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:4000/login', {
            email,
            Password
          })
          setCookies('access_token', response.data.token);;
          window.localStorage.setItem("userID", response.data.userID);
          navigate('/dashboard');
          
        } catch(error) {
          // console.log(err);
          if (error.response && error.response.data && error.response.data.error) {
            setErrorMessage(error.response.data.error);
          }
        }
      };
  return (
    <section className='home-wrapper'>
        <div className='image-wrapper'>
            <img src={LoginImage} className='home-img' alt='developers'/>
        </div>
        <form className="review-login" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='login-fields'>
                <div className='origin'>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder="Enter here" variant="soft" type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </FormControl>
                </div>
                <div className='dest'>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="Enter here" variant="soft" type='Password' value={Password} onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>
                </div>
                {/* {errorMessage && <p className='error-msg'>{errorMessage}</p>} */}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                
            </div>
            
            <div className='submit-btn'>
                <Button type="submit">Login</Button>
            </div>
        </form>
    </section>
  )
}

export default Login