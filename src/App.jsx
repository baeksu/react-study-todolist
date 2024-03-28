import { useEffect, useState } from "react";

function fetchTodos() {
    const todos = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        todos.push(value);
    }
    return todos;
}

function App() {}

export default App;
