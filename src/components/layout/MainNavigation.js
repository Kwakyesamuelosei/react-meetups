import { Link } from "react-router-dom"
import { useContext } from 'react'
import classes from './MainNavigation.module.css'
import FavoriteContext from '../../store/favorites-context'


const MainNavigation = () => {
    const favoriteCxt = useContext(FavoriteContext)

    return (
        <header className={classes.header}>
            <div className={classes.logo}> React Meetups </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetup</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites <span className={classes.badge}>{favoriteCxt.totalFavorites}</span></Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation