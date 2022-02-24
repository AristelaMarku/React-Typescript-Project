import { useState } from 'react';
import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
 
  const addTodoHandler = (text: string) =>{
    const newTodo = new Todo(text)
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })
  }
 
  const removeTodoHandler = (todoId: string) =>{
    const todoToRemove = todos.filter((item)=>item.id!==todoId)
    setTodos(todoToRemove)
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
