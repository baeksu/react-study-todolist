import { useState } from "react";

function App() {
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

    const handleClick = (e) => {
        console.log("clicked");
    };

    return (
        <div>
            <h1>TODO 앱</h1>
            <div>
                <input type="text" value={inputText} onChange={handleInput} />
                <button onClick={handleClick}>add</button>
            </div>
        </div>
    );
}

export default App;
