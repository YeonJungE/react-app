import React, { ChangeEvent, FormEvent, useState } from "react";

interface todoListInputProps {
    addTodoItem: AddTodoItem;
}

function TodoListInput({addTodoItem}: todoListInputProps) {
    const [item, setItem] = useState('');   // string 타입 입력 

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    const submitHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); // 버튼 클릭시 페이지 이동 방지
        addTodoItem(item);
        setItem("");
    }

    return <form>
            <input type="text" value={item} onChange={onChangeHandler}/>
            <button type="submit" onClick={submitHandler}>추가</button>
        </form>;
}

export default TodoListInput;