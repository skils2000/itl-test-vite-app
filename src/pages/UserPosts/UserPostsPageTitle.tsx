import star from "../../assets/star.svg";

export default function UserPostsPageTitle(props: {
  userId: number | string;
  userName: string;
}) {
  return (
    <div className="titleBlock">
      <div className="userName">
        {props.userName} <img src={star} />
      </div>
      <div className="subTitle">Posts</div>
    </div>
  );
}
