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
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(null)

    const selectTodoIdForEdit = (id: Todo['id']) => {
        setTodoIdForEdit(id)
    }

    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1, description, name, checked: false}])
    }

    const checkTodo = (id: Todo['id']) => {
        setTodos(
            todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo
        }))
    }

    const deleteTodo = (id: Todo['id']) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const changeTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === todoIdForEdit) {
                    return { ...todo, name, description }
                }
                return todo
            }))
        setTodoIdForEdit(null)
    }

  return (
      <div className={Style.app_container}>
          <div className={Style.container}>
              <Header  todoCount={todos.length}/>
              <InputField mode={'add'} addTodo={addTodo}/>
              <TodoList todos={todos}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                        selectTodoIdForEdit={selectTodoIdForEdit}
                        todoIdForEdit={todoIdForEdit}
                        changeTodo={changeTodo}
              />
          </div>
      </div>
  );
}

export default App;
