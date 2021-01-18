import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.item}>
            
            <img className={s.fAva} src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" alt="" />
            <a href={props.friendsId}>{props.friendsName}</a>
        </div>
    )
}
export default Friends