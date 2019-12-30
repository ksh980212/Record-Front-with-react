import React, {useState, useEffect} from 'react'
import { Button, Toast, ToastBody, ToastHeader} from 'reactstrap';
import axios from 'axios';



const TodayRecord = () => {

    const [data, setData] = useState([]);

    const load= () => {
        axios.get("http://localhost:8080/api/v1/record?sort=id,desc")
        .then((response)=>{
            setData(response.data);
        })
    }

    useEffect( () => {
        load()
    }, [])

    const deleteRecord = param => () =>{
        axios.delete(`http://localhost:8080/api/v1/record?id=${param}`)
        .then(()=>{
            load()
        })
    }

    const recordList = data.map(todo => {
        return(
            <div key ={todo.id} className="p-3 my-2 rounded">
                <Toast id="todoList-toast">
                    <ToastHeader icon="primary">
                        {todo.title}
                    </ToastHeader>
                    <ToastBody>
                        {todo.content}
                        <p>{todo.createdDate.split("T")[0] +" "+ todo.createdDate.split("T")[1].substring(0, 8)}</p>
                        <Button onClick={deleteRecord(todo.id)} close></Button>
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
