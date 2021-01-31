import React, { useState, useRef } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickName: "",
  });

  // 돔 객채에 접근

  const nameInput = useRef();

  // 비 구조 할당
  const { name, nickName } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // 객체를 업데이트 하는 방법
    // 1. 기존의 객체를 복사한다.
    // const nextInputs = {
    //   ...inputs,
    //   [name]: value,
    // };
    // setInputs[nextInputs];

    setInputs({
      ...inputs, //스프레드 문법
      [name]: value,
    });
  };

  // 불변성을 지킨다
  // 1. 객체를 복사해서
  // 2. 복사한 객체를 업데이트 한다.
  //불변성을 지켜야만 객체가 업데이트 된걸 알수있다.

  const onReset = (e) => {
    setInputs({
      name: "",
      nickName: "",
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      ></input>
      <input
        name="nickName"
        placeholder="닉네임"
        onChange={onChange}
        value={nickName}
      ></input>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          값 : {name} ({nickName})
        </b>
      </div>
    </div>
  );
}
