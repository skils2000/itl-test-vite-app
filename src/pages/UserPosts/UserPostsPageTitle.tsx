import { useEffect, useState } from "react";
import star from "../../assets/star.svg";
import favoriteStar from "../../assets/favStar.svg";
import { FAVORITE_LIST } from "../../utils/localStorageNames";

export default function UserPostsPageTitle(props: {
  userId: number | string;
  userName: string;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    const rawFList = localStorage.getItem(FAVORITE_LIST);
    if (rawFList) {
      let fList: Array<number | string> = JSON.parse(rawFList);
      if (isFavorite) {
        // TODO проверку на отсутствие в массиве
        const index = fList.indexOf(props.userId);

        fList.splice(index, 1);
        console.log(rawFList, fList);

        localStorage.setItem(FAVORITE_LIST, JSON.stringify(fList));
        setIsFavorite(false);
      } else {
        fList.push(props.userId);
        console.log(rawFList, fList);

        localStorage.setItem(FAVORITE_LIST, JSON.stringify(fList));
        setIsFavorite(true);
      }
    } else {
      localStorage.setItem(FAVORITE_LIST, JSON.stringify([props.userId]));
      setIsFavorite(true);
    }
  }

  useEffect(() => {
    const rawFList = localStorage.getItem(FAVORITE_LIST);
    if (rawFList) {
      const fList: Array<number | string> = JSON.parse(rawFList);
      if (fList.includes(props.userId)) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    }
  }, []);

  return (
    <div className="titleBlock">
      <div className="userName">
        {props.userName}{" "}
        <img
          src={isFavorite ? favoriteStar : star}
          onClick={() => toggleFavorite()}
        />
      </div>
      <div className="subTitle">Posts</div>
    </div>
  );
}
