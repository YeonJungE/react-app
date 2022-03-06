import React from 'react';
import TodoLisHeader from 'component/TodoListHeader';
import TodoListInput from 'component/TodoListInput';
// import TodoList from 'component/TodoList';
import TodoItem from 'component/TodoItem';
import TodoListFooter from 'component/TodoListFooter';
// import logo from './logo.svg';
// import './App.css';

// todoItem 데이터 타입 선언.
type item =  {
  id: number,
  content: string,
  completed: boolean
}

// 배열 안에 위에 선언해둔 item 타입을 선언.
// 초기 데이터 하드코딩으로 셋팅하여 출력되는 것 부터 확인
const todoItems:Array<item>= [
  {
      id: 1,
      content: '개미는 뚠뚠',
      completed: true,
  },
  {
      id: 2,
      content: '오늘도 뚠뚠',
      completed: true,
  },
  {
      id: 3,
      content: '열심히 일을 하네~',
      completed: false,
  },
];

function App() {
  return (
    <div>
      <TodoLisHeader></TodoLisHeader>
      <TodoListInput></TodoListInput>
      <TodoItem item={ todoItems[0] }></TodoItem>
      <TodoItem item={ todoItems[1] }></TodoItem>
      <TodoItem item={ todoItems[2] }></TodoItem>
      <TodoListFooter></TodoListFooter>
    </div>

  );
}

export default App;
