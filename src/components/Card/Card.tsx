import { redirect } from "react-router-dom"
import { UserInfo } from "../../types/userTypes"
import './Card.css'

export default function Card({userInfo}:{userInfo: UserInfo}){
    return (
        <article className="card" onClick={()=>redirect(`/userPosts/${userInfo.id}`)}>
            <div className="cardHeaderFont">
                {userInfo.name}
            </div>
            <div className="cardContentFont">
                {userInfo.username}
            </div>
            <div className="cardContentFont">
                {userInfo.email}
            </div>
            <div className="cardContentFont">
                {userInfo.phone}
            </div>
            <div className="cardContentFont">
                {userInfo.website}
            </div>
        </article>
    )
}