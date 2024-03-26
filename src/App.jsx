import { useState } from "react";

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
    //local storage 에 가지고 있는 데이터를 가져온다.
    const todos = fetchTodos();

    // useState() 를 통해서 inputText 의 상태를 모니터링 하면서 변화를 감지해서 값을 변경해준다.
    //이 때 setInputText 함수를 통해서 inputText 의 값을 갱신할 수 있다.
    const [inputText, setInputText] = useState("");

    //html의 이벤트 속성중 하나인 onchange="" 가 리액트애는 카멜케이스로 존재한다.
    //해당 이벤트에 바인딩할 handleInput() 을 작성해주자.
    const handleInput = (e) => {
        // console.log(e);
        const value = e.target.value;
        setInputText(value);
    };

    //onclick 도 기본 html 에 있는 속성임
    const handleClick = (e) => {
        localStorage.setItem(inputText, inputText);
        setInputText(""); // add 버튼을 클릭하고 나면 input 의 value 를 초기화 시켜준다.
    };

    const handleRemove = (todo, index) => {
        todos.splice(index, 1);
        console.log(todos);
    };

    return (
        <div>
            <h1>TODO 앱</h1>
            <div>
                <input type="text" value={inputText} onChange={handleInput} />
                <button onClick={handleClick}>add</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo, index) => {
                        //react 에서는 요런식으로 li 아이템들을 부여준다 고 한다.
                        //react 에서 이벤트처리 함수에 파라미터를 넘기고 싶을 때, 익명함수를 사용하면, 즉시 실행이 안되고, 이벤트 발생할 때만 생기네

                        return (
                            <li key={index}>
                                <span>{todo}</span>
                                <button onClick={() => handleRemove(todo, index)}>remove</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
