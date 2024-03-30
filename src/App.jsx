import { useEffect, useState } from "react";
import TodoHeader from "./components/TodoHeader";

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
    // useState() 를 통해서 inputText 의 상태를 모니터링 하면서 변화를 감지해서 값을 변경해준다.
    //이 때 setInputText 함수를 통해서 inputText 의 값을 갱신할 수 있다.
    const [inputText, setInputText] = useState("");

    // 1.local storage 에 가지고 있는 데이터를 가져온다.
    // 2.const todos = fetchTodos();
    // 3.근데 todos 에 remove 를 할때, 화면이 바로 안바뀌는걸 볼 수 있다.
    // 4.그래서 얘를 상태관리를 하도록 useState 를 사용해서 바꿔주자.
    //   useState 에 fetchTodos 를 넘겨주면, localStorage 에 있는 값들을 반환받아서 초기화 해줄 수 있다.
    //   그냥 [] 로 초기화를 해줘도 될거 같긴한데, 최초에 localStorage 에 있는 값이 있을 수도 있으니
    const [todos, setTodos] = useState(fetchTodos);

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

        //todos 에 push 를 해주고 싶은데, 요거는 원본 배열을 조작하는거다. (삭제할 때와 마찬가지 이슈)
        //set 함수 쓸 때 그냥 값을 넣으면 그 값으로 세팅되고
        //argument 를 가지는 콜백함수를 넣으면 이때 argument 는 이전 상태값이 된다.
        setTodos((currentTodos) => {
            return [...currentTodos, inputText];
        });
        setInputText(""); // add 버튼을 클릭하고 나면 input 의 value 를 초기화 시켜준다.
    };

    const handleRemove = (todo, index) => {
        // splice() 는 배열을 직접 조작하는 메서드이다.
        // 리액트 상태관리에서는 이전상태와 비교를 해야 하는데, 직접 배열을 조작하면 비교하기 어렵다. 그래서 slice() 함수를 써야 한다.
        // 근데 slice() 하면 삭제해야 하는 애가 반환되니까, filter 를 사용하는게 좀 더 낫다
        // todos.splice(index, 1);
        const result = todos.filter((item) => {
            return item !== todo ? true : false;
        });

        setTodos(result);
        localStorage.removeItem(todo);
    };

    return (
        <div>
            <TodoHeader></TodoHeader>
            <div>
                <input type="text" value={inputText} onChange={handleInput} />
                <button onClick={handleClick}>add</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo, index) => {
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
