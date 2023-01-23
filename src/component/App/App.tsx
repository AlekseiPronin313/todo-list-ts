import React, {useState} from 'react';
import Style from './App.module.scss'
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";

const DEFAULT_TODO_LIST = [
    { id: 1, name: 'task 1', description: 'description 1', checked: false },
    { id: 2, name: 'task 2', description: 'description 2', checked: false },
    {
        id: 3,
        name: 'task 3',
        description:
            'so long task description 3 so long task description so long task description so long task description so long task description',
        checked: true
    }
];

function App() {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST)

    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false}])
    }



  return (
      <div className={Style.app_container}>
          <div className={Style.container}>
              <Header  todoCount={todos.length}/>
              <InputField addTodo={addTodo}/>
              <TodoList/>
          </div>
      </div>
  );
}

export default App;
