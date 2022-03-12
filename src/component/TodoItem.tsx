import React from "react";
import "./TodoList.css";

// 부모 컴포넌트로부터 받아올 props
interface todoItemProps {
    todoItem: Item;
    completeTodoItem: CompleteTodoItem;
    removeTodoItem: RemoveTodoItem;
}

// 리스트 안에 바인딩 해줄 데이터들
// 체크박스, 내용, 삭제버튼
const Todoitem = ({ todoItem, completeTodoItem, removeTodoItem }: todoItemProps) => { 
    return <li>
                <label className={ todoItem.completed ? "textCompleted" : undefined }>
                    <input type="checkbox" checked={ todoItem.completed } onChange={() => completeTodoItem(todoItem)}/>
                    <span>{ todoItem.content }</span>
                    <button onClick={() => removeTodoItem(todoItem.id)}> 삭제 </button>
                </label>
            </li>;
    }

export default Todoitem;
