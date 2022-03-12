// 공통으로 쓰는 item 타입 정의 해놓고 필요한 곳마다 쓰기 !!
// 페이지마다 정의안해줘도 되서 아주편하네 ..

type Item = {
  id: number;
  content: string;
  completed: boolean;
};

type CompleteTodoItem = (checkedItem: Item) => void; // 완료 할때 필요 값

type AddTodoItem = (newContent: string) => void; // 추가해야 하는 값 -> 내용(string)

type RemoveTodoItem = (removeItemId: number) => void; // 삭제에 필요한 값 -> id
