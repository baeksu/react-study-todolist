import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function fetchTodos() {
    const todos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        todos.push(value);
    }
    return todos;
}

function App() {
    const [todos, setTodos] = useState(fetchTodos);

    //onclick 도 기본 html 에 있는 속성임
    const addTodo = (todo) => {
        localStorage.setItem(todo, todo);

        setTodos((currentTodos) => {
            return [...currentTodos, todo];
        });
        // setInputText(""); // add 버튼을 클릭하고 나면 input 의 value 를 초기화 시켜준다.
    };

    const removeTodo = (todo) => {
        const result = todos.filter((item) => {
            return item !== todo ? true : false;
        });

        setTodos(result);
        localStorage.removeItem(todo);
    };

    return (
        <div>
            <TodoHeader></TodoHeader>
            <TodoInput onTodoAdd={addTodo}></TodoInput>
            <TodoList todos={todos} onTodoRemove={removeTodo}></TodoList>
        </div>
    );
}

export default App;
