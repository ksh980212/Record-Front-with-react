import React, {useState, useEffect} from 'react'
import { Toast, ToastBody, ToastHeader} from 'reactstrap';
import axios from 'axios';



const TodayRecord = () => {

    const [data, setData] = useState([
    ]);

    useEffect( () => {
        axios.get("http://localhost:8080/api/v1/record")
        .then((response)=>{
            setData(response.data);
        }).catch(()=>{
        })
    })

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

    
    return (
      <div>
          <p id= "record-title">Record List</p>
          {recordList}
      </div>
    );
  };

export default TodayRecord;
