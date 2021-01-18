import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';


const Navbar = (props) => {
    // let friendsElements = props.state.friends.map(e => <Friends friendsName={e.name} friendsId={e.id} />)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/profile'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/users'>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to='/settings'>Settings</NavLink>
            </div>
            {/* <div>
                <h3>Friends</h3>
                {friendsElements}
            </div> */}
        </nav>
    )
}

export default Navbar