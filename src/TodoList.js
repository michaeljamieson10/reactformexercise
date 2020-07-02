import React,{ useState } from 'react';
import Todo from './Todo';
import TodoForm from  './TodoForm'
import {v4 as uuid} from 'uuid';

function TodoList() {
    const INITIAL_STATE = [
        { id: uuid(),text: 'this cat '},
        { id: uuid(),text: 'is so cool'}

      ]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(items => [...items, { ...newTodo , id:uuid() }])
    }
    const removeTodos = (id) => {
        const filteredTodosArr = todos.filter(box => box.id !== id)
        setTodos([...filteredTodosArr])
    }
 
  return (
    <div>
        {todos.map((todo) => (<Todo text={todo.text} addTodo={addTodo} removeTodos={removeTodos} key={todo.id} id={todo.id}/>))}
        <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default TodoList;