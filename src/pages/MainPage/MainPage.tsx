import { useCallback, useEffect, useState } from "react";
import { UserInfo } from "../../types/userTypes";
import { APIs } from "../../api/api";
import Card from "../../components/Card/Card";
import "./MainPage.css";
import Pagination from "../../components/Pagination/Pagination";

const ROWS_PER_PAGE = 20;

const getTotalPageCount = (rowCount: number): number =>
  Math.ceil(rowCount / ROWS_PER_PAGE);

export default function MainPage() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [page, setPage] = useState(1);
  const [currentUsers, setCurrentUsers] = useState<UserInfo[]>([]);

  async function getUsers() {
    const response = await APIs.getUsers();
    setUsers(response.data);
  }

  const handleNextPageClick = useCallback(() => {
    const current = page;
    const next = current + 1;
    const total = users ? getTotalPageCount(users.length) : current;

    setPage(next <= total ? next : current);
  }, [page, users]);

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const curUsers = users.slice(
      (page - 1) * ROWS_PER_PAGE,
      page * ROWS_PER_PAGE
    );
    setCurrentUsers(curUsers);
  }, [page, users]);

  return (
    <div>
      <div className="usersList">
        {currentUsers.map((user) => {
          return <Card userInfo={user} key={user.id}></Card>;
        })}
      </div>
      <div className="paginationBlock">
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: page === 1,
            right: page === getTotalPageCount(users.length),
          }}
          nav={{ current: page, total: getTotalPageCount(users.length) }}
        />
      </div>
    </div>
  );
}
