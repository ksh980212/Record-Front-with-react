import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const validateInputError = (param) =>{
    if(param.trim() === "" || param === undefined){
        return true;
    }
    return false;
}

const checkPasswordisCorrect= (first, last) =>{
    if(first !== last){
        return true;
    }
    return false;
}

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailOnChange= (event) => {
        setEmail(event.target.value);
    }

    const passwordOnChange = (event) => {
        setPassword(event.target.value);
    }

    const userLoginButtonClick = () => {

        if(validateInputError(email)){
            alert("Enter your Email");
            return;
        }

        if(validateInputError(password)){
            alert("Enter Password");
            return;
        }

        alert("123");
    }


  return (
    <Form>
        <p id= "record-title">Login</p>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" onChange={emailOnChange} value={email} placeholder="Record@record.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" onChange={passwordOnChange} value={password} placeholder="" />
      </FormGroup>
      
      <Button block color="primary" onClick={userLoginButtonClick} >Submit</Button>
    </Form>
  );
}

export default Login;