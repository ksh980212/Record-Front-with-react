import React, {useState, useEffect} from 'react'
import { Button, Toast, ToastBody, ToastHeader} from 'reactstrap';
import axios from 'axios';



const TodayRecord = () => {

    const [data, setData] = useState([]);

    const load= () => {
        axios.get("http://localhost:8080/api/v1/record?sort=id,desc")
        .then((response)=>{

            if(response.data.length === 0){
                setData(
                    [
                        {id:0, title:"Hello", content:"Welcome to Record App", createdDate: "2019-12-30T12:30", iconColor: "primary"},
                        {id:1, title:"How to use Record?", content: "Go to Setting -> Record Setting", createdDate:"2019-12-30T12:30", iconColor:"success"},
                        {id:2, title:"How to use Record?", content: "And you can record your record", createdDate:"2019-12-30T12:30", iconColor:"warning"},
                        {id:3, title:"Contact me", content: "ksh980212@gmail.com", createdDate:"2019-12-30T12:30", iconColor:"info"}
                    ]
                    )
            }
            else{
            setData(response.data);
            }
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
                    <ToastHeader icon={todo.iconColor}>
                        {todo.title}
                    </ToastHeader>
                    <ToastBody id = "toast-body">
                        {todo.content}
                        <p className = "created-date-font">{todo.createdDate.split("T")[0] +" "+ todo.createdDate.split("T")[1].substring(0, 8)}</p>
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
