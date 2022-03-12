import React from "react";
import TodoItem from 'component/TodoItem';

interface todoListProps {
    todoItems: Array<Item>;
    completeTodoItem: CompleteTodoItem;
    removeTodoItem: RemoveTodoItem;
}
// 이곳에서 map 을 활용하여 반복적으로 todoItem 컴포넌트를 출력해주기
const TodoList = ({ todoItems, completeTodoItem, removeTodoItem }: todoListProps) => {
    return <ul>
            { todoItems.map(todoItem => {
                return <TodoItem key={todoItem.id} todoItem={todoItem} completeTodoItem={completeTodoItem} removeTodoItem={removeTodoItem}/>
            })}
            </ul>;
}

export default TodoList;