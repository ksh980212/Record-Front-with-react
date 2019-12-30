import React from 'react'
import { Toast, ToastBody, ToastHeader} from 'reactstrap';

const data=[
    {key:0, title:"Springboot", content: "스프링 부트와 AWS로 혼자 구현하는 웹 서비스 마무리", createdDate:"2019-12-30"},
    {key:1, title:"JAVA", content:"Effective-Java 3/E private", createdDate:"2019-12-30"},
    {key:2, title:"Spring", content:"스프링 핵심 기술 SingleTon 공부", createdDate:"2019-12-30"}
]

const recordList = data.map(todo => {
    return(
        <div key ={todo.key} className="p-3 my-2 rounded">
            <Toast id="todoList-toast">
                <ToastHeader icon="primary">
                    {todo.title}
                </ToastHeader>
                <ToastBody>
                    {todo.content}
                    <p>{todo.createdDate}</p>
                </ToastBody>
            </Toast>
        </div>
    );
})

const TodayRecord = (props) => {
    return (
      <div>
          <p id= "record-title">Record</p>
          {recordList}
      </div>
    );
  };

export default TodayRecord;
