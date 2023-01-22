import React from 'react';
import Style from './App.module.scss'
import Header from "../Header/Header";
import InputField from "../InputField/InputField";
import TodoList from "../TodoList/TodoList";
function App() {
  return (
      <div className={Style.app_container}>
          <div className={Style.container}>
              <Header />
              <InputField/>
              <TodoList/>
          </div>
      </div>
  );
}

export default App;
