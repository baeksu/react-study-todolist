function TodoList({ todos, onTodoRemove }) {
    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    //react 에서는 요런식으로 li 아이템들을 부여준다 고 한다.
                    //react 에서 이벤트처리 함수에 파라미터를 넘기고 싶을 때, 익명함수를 사용하면, 즉시 실행이 안되고, 이벤트 발생할 때만 생기네

                    return (
                        <li key={index}>
                            <span>{todo}</span>
                            <button onClick={() => onTodoRemove(todo)}>remove</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList;
