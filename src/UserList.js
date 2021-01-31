import React from "react";

function User({ user }) {
  return (
    <div>
      {user.username}{" "}
      <b>
        {" "}
        <span>({user.email})</span>
      </b>
    </div>
  );
}

export default function UserList() {
  const users = [
    { id: 1, username: "velopert1", email: "public1@gmail.com" },
    {
      id: 2,
      username: "velopert2",
      email: "public2@gmail.com",
    },
    {
      id: 3,
      username: "velopert3",
      email: "public3@gmail.com",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        // map을 사용할때눈 key 값을 줘야한다
        // key로 줄만한 값이 없을때는 map 함수의 두번째 파라미터인 index를 사용한다.
        // ex)
        // (user, index) =>{}
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
