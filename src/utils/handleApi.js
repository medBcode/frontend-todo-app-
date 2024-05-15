import axios from 'axios';

const baseUrl = 'https://backend-todo-app-wjun.onrender.com';

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data})=>{
        setToDo(data)
    })
};

const addToDo = (text,setText,setToDo) => {
    axios.post(`${baseUrl}/save`,{text})
        .then((data) => {
            setText("")
            getAllToDo(setToDo)
        }).catch((error)=> console.log(error))
}

const updateToDo = (toDoId,text,setText,setToDo,setIsUpdating) => {
    axios.put(`${baseUrl}/update`,{_id:toDoId,text})
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        }).catch((error)=> console.log(error))
}

const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete`, { data: { _id } })
        .then((response) => {
            console.log("Delete API call successful");
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error deleting todo:', error);
        });
    };




export {getAllToDo, addToDo, updateToDo, deleteToDo};