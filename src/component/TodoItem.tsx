import React from "react";

// 부모 컴포넌트로부터 받아올 props
interface todoItemProps {
    item: {
        id: number,
        content: string,
        completed: boolean
    }
}

// 리스트 안에 바인딩 해줄 데이터들
// 체크박스, 내용, 삭제버튼
function Todoitem({ item }: todoItemProps) {
    return <li>
                <input type="checkbox" checked={ item.completed }/>
                <span>{ item.content }</span>
                <button> X </button>
            </li>;
    }

export default Todoitem;