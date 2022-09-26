import {getTodos} from "../services";
import {useState} from "react";
import {useEffect} from "react";
import Todo from "./Todo";
import './Todo.css'

const Todos = () => {
    let [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(value => setTodos(value));
    }, [])

    return (
        <div className={'todos'}>
            {
                todos.map((todo, index) => (<Todo item={todo} key={index} />))
            }
        </div>
    );
};

export default Todos;