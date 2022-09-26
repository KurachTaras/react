import './Todo.css'

const Todo = (props) => {
let {item:todo} = props;
    return (
        <div className={'todo_card'}>
            <div>{todo.id} - {todo.title}</div>
        </div>
    );
};

export default Todo;