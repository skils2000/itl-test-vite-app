import { useState, useEffect } from "react";
import { APIs } from "../../api/api";
import Card from "../../components/Card/Card";
import { UserInfo } from "../../types/userTypes";
import "./Favorites.css";
import { FAVORITE_LIST } from "../../utils/localStorageNames";

export default function Favorites() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getUsers() {
    const rawFList = localStorage.getItem(FAVORITE_LIST);

    if (rawFList) {
      const response = APIs.getUsers();
      const fList: Array<number | string> = JSON.parse(rawFList);

      let favoriteUsers = (await response).data.filter((user) => {
        if (fList.includes(user.id.toString())) return user;
      });

      setUsers(favoriteUsers);
      setIsLoading(false);
    } else {
      setUsers([]);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <></>;

  if (users.length > 0)
    return (
      <div className="usersList">
        {users.map((user) => {
          return <Card userInfo={user} key={user.id}></Card>;
        })}
      </div>
    );
  else
    return (
      <div className="emptyFavorites">
        Вы пока никого не добавили в избранное 😭
      </div>
    );
}
