import { useContext } from "react";
import FavoritesContext from "../Store/favorites-Context";
import MeetupList from "../Components/Layout/meetups/MeetupList";
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>No Favorites, add some!</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
export default FavoritesPage;
