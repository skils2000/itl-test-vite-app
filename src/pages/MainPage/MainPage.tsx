import { useEffect, useState } from "react";
import { UserInfo } from "../../types/userTypes";
import { APIs } from "../../api/api";

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
      {users.map((user) => {
        return <article key={user.id}>{user.name}</article>;
      })}
    </div>
  );
}
