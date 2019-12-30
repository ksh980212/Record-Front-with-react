import React, {useState} from 'react';
import {Toast, ToastHeader, ToastBody, Button,  Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SettingRecord = (props) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const titleOnChange = event=>{
        setTitle(event.target.value);
    }

    const contentOnChange = event =>{
        setContent(event.target.value);
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
                    <Button color="primary" size="lg" block>Save</Button>
                </div>
            </Form>


        </div>
      );
}


export default SettingRecord;