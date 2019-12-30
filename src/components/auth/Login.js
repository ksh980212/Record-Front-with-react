import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory} from 'react-router-dom';

const validateInputError = (param) =>{
    if(param.trim() === "" || param === undefined){
        return true;
    }
    return false;
}


const Login = ({changeLoginState}) => {

    const cookies = new Cookies();
    const history = useHistory();

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

        axios.post("http://localhost:8080/auth/v1/login",{
            email:email,
            password:password
        }).then((response)=>{

            cookies.set("id", response.data, {path: "/"});
            changeLoginState();
            history.push("/");

        }).catch(()=>{
            alert("Check your input")
        })
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
        <Input type="password" onChange={passwordOnChange} value={password} placeholder="********" />
      </FormGroup>
      
      <Button block color="primary" onClick={userLoginButtonClick}>Login</Button>
    </Form>
  );
}

export default Login;