import { useEffect, useState } from "react";
function TodoInput({ onTodoAdd }) {
    const [inputText, setInputText] = useState("");
    const handleInput = (e) => {
        // console.log(e);
        const value = e.target.value;
        setInputText(value);
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInput} />
            <button onClick={() => onTodoAdd(inputText)}>add</button>
        </div>
    );
}

export default TodoInput;
