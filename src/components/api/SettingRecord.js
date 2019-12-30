import React, {useState} from 'react';
import {Toast, ToastHeader, ToastBody, Button,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';


const SettingRecord = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleOnChange = event=>{
        setTitle(event.target.value);
    }

    const contentOnChange = event =>{
        setContent(event.target.value);
    }

    const saveRecord = () => {
        axios.post("http://localhost:8080/api/v1/record",{
            title: title,
            content: content
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
            <h3 id="setting-record-title">Record your record</h3>
            <Form>
                <FormGroup>
                    <Label>Title</Label>
                    <Input onChange={titleOnChange} value={title}/>
                    <FormText>Check the preview at the bottom.</FormText>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Content</Label>
                    <Input onChange={contentOnChange} value={content}/>
                    <FormText>Check the preview at the bottom.</FormText>
                </FormGroup>

                <div className = "preview-record">
                    <Toast id="todoList-toast">
                        <ToastHeader icon="primary">
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