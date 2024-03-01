import { Link } from "react-router-dom";
import star from '../../assets/star.svg'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <Link to="/favorites" className="favoriteLink">
        Избранное
        <img src={star}/>
      </Link>
    </div>
  );
}
