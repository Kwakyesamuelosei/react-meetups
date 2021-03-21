import FavoriteContext from '../store/favorites-context'
import { useContext } from "react";
import MeetupList from '../components/meetups/MeetupList'
 
const FavoritesPage = () =>{
    const favoriteCxt = useContext(FavoriteContext)
    let content;

    if(favoriteCxt.totalFavorites === 0){
        content =  <p>You got no favorite. Start adding some?</p>
    }else{
        content = <MeetupList meetups={favoriteCxt.favorites}/>
    }

    return (
        <section>
            <h1>My Favorites</h1>
             { content  }
        </section>
    )
}

export default FavoritesPage;