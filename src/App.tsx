import React, { useRef, useState } from 'react';
import TodoLisHeader from 'component/TodoListHeader';
import TodoListInput from 'component/TodoListInput';
import TodoList from 'component/TodoList';
import TodoListFooter from 'component/TodoListFooter';


// 배열 안에 위에 선언해둔 item 타입을 선언.
// 초기 데이터 하드코딩으로 셋팅하여 출력되는 것 부터 확인
const initialTodoItems:Array<Item>= [
  {
      id: 1,
      content: '예시 데이터',
      completed: false,
  },
  {
      id: 2,
      content: '할일을 추가 해 주세요',
      completed: true,
  },
];

function App() {
  // 상태 값 변경 훅(useState())
  // const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const completeTodoItem: CompleteTodoItem = checkedItem => {
    const newItems = todoItems.map(todoItem => {
      if (todoItem === checkedItem) {
        return {
          ...todoItem,
          completed: !todoItem.completed
        }
      }
      return todoItem;
    });
    setTodoItems(newItems);
  }

  // 새로운 할 일 추가할 시 id 초기 id 값
  const createId = useRef(initialTodoItems.length + 1);

  // 할 일 추가 
  const addTodoItem: AddTodoItem = newContent => {
    newContent.trim() !== '' &&   //빈 값은 추가 X
    setTodoItems([...todoItems, {
      id: createId.current,
      content: newContent,
      completed: false
    }])
    createId.current += 1;  // 다음 할 일은 +1
  }

  // 삭제
  const removeTodoItem: RemoveTodoItem = removeTodoItemId => {
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== removeTodoItemId));
  }

  // 전체 삭제
  function allClearTodoItems() {
    setTodoItems([]);
  }

  return (
    <div>
      <TodoLisHeader></TodoLisHeader>
      <TodoListInput addTodoItem={addTodoItem} />
      <TodoList todoItems={ todoItems } completeTodoItem={completeTodoItem} removeTodoItem={removeTodoItem}></TodoList>
      <button onClick={() => allClearTodoItems()}>전체삭제</button>
      <TodoListFooter></TodoListFooter>
    </div>

  );
}

export default App;
