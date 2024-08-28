import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  RegisterBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
} from '../../styles/RegisterStyles';

import bg1 from '../../assets/bg1.png';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://zawadi-project.onrender.com/api/users/register-super-admin', {
        username,
        email,
        password,
      });
      toast.success('Registered successfully!');
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      toast.error('Failed to register. Please try again.');
      console.error(error.response.data);
    } 
  };

  return (
    <Container>
      <ToastContainer />
      <RegisterBox>
        <Logo src={bg1} alt="Your logo" />
        <Title>Register</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Full name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </Form>
        <StyledLink to="/login">Already have an account? Login</StyledLink>
      </RegisterBox>
    </Container>
  );
};

export default Register;
