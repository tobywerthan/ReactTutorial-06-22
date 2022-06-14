import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import NewMeetupPage from "./Pages/NewMeetup";
import FavoritesPage from "./Pages/Favorites";
import Layout from "./Components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
