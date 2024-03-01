import { useEffect, useState } from "react";
import { UserInfo } from "../../types/userTypes";
import { APIs } from "../../api/api";
import Card from "../../components/Card/Card";
import "./MainPage.css";

export default function MainPage() {
  const [users, setUsers] = useState<UserInfo[]>([]);

  async function getUsers() {
    const response = await APIs.getUsers();
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="usersList">
        {users.map((user) => {
          return <Card userInfo={user} key={user.id}></Card>;
        })}
      </div>
      {/*
        Место для пагинации
      */}
    </div>
  );
}
