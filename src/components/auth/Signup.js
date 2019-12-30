import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import { useHistory} from 'react-router-dom';

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

const SignUp= () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailOnChange= (event) => {
        setEmail(event.target.value);
    }

    const passwordOnChange = (event) => {
        setPassword(event.target.value);
    }

    const confirmPasswordOnChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    const userSignupButtonClick = () => {

        if(validateInputError(email)){
            alert("Enter your Email");
            return;
        }

        if(validateInputError(password)){
            alert("Enter Password");
            return;
        }

        if(validateInputError(confirmPassword)){
            alert("Enter Password");
            return;
        }

        if(checkPasswordisCorrect(password, confirmPassword)){
            alert("Check your each password");
            return;
        }

        axios.post("http://localhost:8080/auth/v1/signUp", {
            email: email,
            password: password
        }).then(()=>{
            alert("Signup Success");
            history.push("/");
        }).catch(()=>{

        })

    }


  return (
    <Form>
        <p id= "record-title">Sign up</p>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" onChange={emailOnChange} value={email} placeholder="Record@record.com" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" onChange={passwordOnChange} value={password} placeholder="********" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input type="password" onChange={confirmPasswordOnChange} value={confirmPassword} placeholder="********" />
      </FormGroup>
      
      <Button block color="primary" onClick={userSignupButtonClick}>Sign Up</Button>
    </Form>
  );
}

export default SignUp;