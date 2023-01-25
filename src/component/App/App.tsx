import React from 'react';
import {TodoProvider} from "../../utils";
import Style from './App.module.scss'
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";

function App() {
  return (
      <TodoProvider>
      <div className={Style.app_container}>
          <div className={Style.container}>
              <Header />
              <InputField mode={'add'} />
              <TodoList />
          </div>
      </div>
    </TodoProvider>
  );
}

export default App;
