import { useNavigate } from "react-router-dom";
import { UserInfo } from "../../types/userTypes";
import "./Card.css";

export default function Card({ userInfo }: { userInfo: UserInfo }) {
  const navigate = useNavigate();

  return (
    <article
      className="card"
      onClick={() => navigate(`/userPosts/${userInfo.id}`)}
    >
      <div className="cardHeaderFont">{userInfo.name}</div>
      <div className="cardContentFont">{userInfo.username}</div>
      <div className="cardContentFont">{userInfo.email}</div>
      <div className="cardContentFont">{userInfo.phone}</div>
      <div className="cardContentFont">{userInfo.website}</div>
    </article>
  );
}
