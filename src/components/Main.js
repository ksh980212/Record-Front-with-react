import React from 'react'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const data=[
    {key:0, title:"title1", content: "content"},
    {key:1, title:"title2", content: "content"},
    {key:2, title:"title3", content: "content"},
    {key:3, title:"title4", content: "content"},
]

const todoList = data.map(todo => {
    return(
        <div key ={todo.key} className="p-3 my-2 rounded">
            <Toast id="todoList-toast">
                <ToastHeader icon="primary">
                    {todo.title}
                </ToastHeader>
                <ToastBody>
                    {todo.content}
                </ToastBody>
            </Toast>
        </div>
    );
})

const Main = (props) => {
    return (
      <div>
          {todoList}
      </div>
    );
  };

export default Main;
