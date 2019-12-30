import React, {useState} from 'react';
import {Col, Toast, ToastHeader, ToastBody, Button,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';


const SettingRecord = () => {

    const cookies = new Cookies();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor]= useState('primary');

    const titleOnChange = event=>{
        setTitle(event.target.value);
    }

    const contentOnChange = event =>{
        setContent(event.target.value);
    }
    
    const colorOnChange = event => {
        setColor(event.target.value);
    }

    const saveRecord = () => {

        if(!cookies.get("id")){
            alert("로그인 후 이용 가능합니다");
            return;
        }

        axios.post("http://localhost:8080/api/v1/record",{
            title: title,
            content: content,
            iconColor : color,
            user: cookies.get("id")
        }).then(()=>{
            alert("저장이 완료되었습니다");
            setTitle("");
            setContent("");
        }).catch(()=>{
            alert("저장에 실패하였습니다");
        })
    }

    return (
        <div>
            <h3 className="font-center" id="setting-record-title">Record your record</h3>
            <Form onSubmit ={saveRecord}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input onChange={titleOnChange} value={title}/>
                    <FormText>Check the preview at the bottom.</FormText>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Content</Label>
                    <Input onChange={contentOnChange} value={content} />
                    <FormText>Check the preview at the bottom.</FormText>
                </FormGroup>

                <FormGroup tag="fieldset" row>
                    <Col sm={10}>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" onChange={colorOnChange}  value="primary" />
                            <ToastHeader icon="primary" />
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="radio2" onChange={colorOnChange}  value="success" />
                            <ToastHeader icon="success" />
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio2" onChange={colorOnChange} value="warning" />
                            <ToastHeader icon="warning" />
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="radio2" onChange={colorOnChange} value="info" />
                            <ToastHeader icon="info" />
                        </Label>
                    </FormGroup>
                    </Col>
                </FormGroup>

                <div className = "preview-record">
                    <Toast id="todoList-toast">
                        <ToastHeader icon={color}>
                            {title}
                        </ToastHeader>
                        <ToastBody id ="preview-toast-body">
                            {content}
                        </ToastBody>
                    </Toast>
                </div>
                <div className = "preview-record">
                    <Button onClick={saveRecord} color="primary" size="lg" block>Save</Button>
                </div>
            </Form>


        </div>
      );
}


export default SettingRecord;