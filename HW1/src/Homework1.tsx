import React, { useState } from "react";
import stacks_array, { Stacks } from "./components/Sample";
import "./css/Homework1.css";

function Homework1() {
  const [myStacks, setMyStacks] = useState<Stacks[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputLock, setInputLock] = useState<boolean>(false);

  //버튼 누르면 동작할 핸들러
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputLock) return; //제출중인지 확인
    const selectedStack = stacks_array.find(
      (stack) => stack.name === inputValue
    );
    if (!selectedStack) {
      // 각 stack들에 대해 name이 inputValue와 같은걸 찾아보고 없는지 확인한다
      alert("그런건 없어요~");
      setInputValue("");
      return;
    }
    if (myStacks.includes(selectedStack)) {
      // 중복인지 확인
      alert("이미 추가했어요~");
      setInputValue("");
      return;
    }
    // 이제 진짜 제출
    setInputLock(true); //문 잠그기 (중복제출 방지)
    setMyStacks([...myStacks, selectedStack]); //내 스택에 추가
    setInputValue(""); //입력란 비우기
    setInputLock(false); //잠갔던 문 열어주기
  };

  //입력란 값 가져오는 핸들러
  const onChangeStackInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  //이미지 클릭하면 내 스택에서 제거
  const onDoubleClickImage = (selectedStack: Stacks) => {
    setMyStacks(myStacks.filter((stack) => stack.name !== selectedStack.name));
  };

  return (
    <>
      <h2>과제1 : Event-Handling과 map함수 사용 + useState 낼름</h2>

      <h4>등록 가능한 스택 이름 (대문자까지 일치해야 함)</h4>
      <div>
        <ul>
          {" "}
          {/* map으로 모든 stacks_array 요소들에 대한 이름 리스트 생성 */}
          {stacks_array.map((stack) => {
            return (
              <li
                key={stack.name}
                onClick={() => {
                  setInputValue(stack.name);
                }}
              >
                {stack.name}
              </li>
            );
          })}
        </ul>
        <form onSubmit={onSubmit}>
          {/* 입력란과 입력 제출 버튼들 */}
          <input onChange={onChangeStackInput} value={inputValue}></input>
          <button type="submit">추가</button>
        </form>
        {/* map으로 모든 myStack 요소들에 대한 이미지 생성 */}
        {myStacks.map((stack) => {
          return (
            <img
              key={`my-${stack.name}`}
              src={stack.img}
              onDoubleClick={() => onDoubleClickImage(stack)}
            ></img>
          );
        })}
      </div>
    </>
  );
}

export default Homework1;
