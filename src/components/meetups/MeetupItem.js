import { useContext } from "react";
import classes from  './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoriteContext from '../../store/favorites-context'

const MeetupItem = ({meetup}) => {
    const favoriteCxt = useContext(FavoriteContext)
    const itemFavorite = favoriteCxt.itemIsFavorite(meetup.id)
    const toggleFavoriteMeetup = () => {
         if(itemFavorite){
            favoriteCxt.removeFavorite(meetup.id)
         }else{
            favoriteCxt.addFavorite({
                 id: meetup.id,
                 title: meetup.title,
                 address: meetup.address,
                 description: meetup.description
            })
         }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>{ meetup.title }</h3>
                    <address>{ meetup.address }</address>
                    <p>{ meetup.description }</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteMeetup}>{itemFavorite ? 'Remove from favorites' : 'Add to favorite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;