import React, {useState, useEffect} from 'react'
import { Toast, ToastBody, ToastHeader} from 'reactstrap';
import axios from 'axios';



const TodayRecord = () => {

    const [data, setData] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8080/api/v1/record?sort=id,desc")
        .then((response)=>{
            setData(response.data);
        }).catch(()=>{
        })
    }, [])

    const recordList = data.map(todo => {
        return(
            <div key ={todo.key} className="p-3 my-2 rounded">
                <Toast id="todoList-toast">
                    <ToastHeader icon="primary">
                        {todo.title}
                    </ToastHeader>
                    <ToastBody>
                        {todo.content}
                        <p>{todo.createdDate.split("T")[0] +" "+ todo.createdDate.split("T")[1].substring(0, 8)}</p>
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
