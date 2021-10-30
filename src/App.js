import React from "react";
import { Route, Switch } from "react-router-dom";
import home from "./pages/home";
import Contact from "./pages/Contact";
// import career from "./pages/career";
// import detail from "./pages/detail";
// import dosriShadi from "./pages/dosri-shadi";
import about from "./pages/About us";
import privacy from "./pages/privacypolicy";
import terms from "./pages/termscondition";
// import partner from "./pages/partner";
import register from "./pages/Register";
import match from "./pages/MatchMaking";
// import message from "./pages/messages";
import search from "./pages/search";
import membership from "./pages/membership";
import Profile from "./pages/profile";
import Preferences from "./pages/setPreferences";
import registration from "./pages/registeration";
import Notifications from "./pages/notifications";
import SearchResults from "./pages/searchResults";
import Otherprofile from "./pages/otherprofile";
import Friends from "./pages/friends";
import Chat from "./pages/chat";
import login from "./pages/login";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/Contact" component={Contact} />
        {/* <Route path="/career" component={career} /> */}
        {/* <Route path="/detail" component={detail} /> */}
        {/* <Route path="/dosri-shadi" component={dosriShadi} /> */}
        <Route path="/About us" component={about} />
        <Route path="/privacypolicy" component={privacy} />
        <Route path="/termscondition" component={terms} />
        {/* <Route path="/partner" component={partner} /> */}
        <Route path="/Register" component={register} />
        <Route path="/MatchMaking" component={match} />
        {/* <Route path="/messages" component={message} /> */}
        <Route path="/search" component={search} />
        <Route path="/membership" component={membership} />
        <Route path="/profile" component={Profile} />
        <Route path="/preferences" component={Preferences} />
        <Route path="/otherprofile" component={Otherprofile} />
        <Route path="/registeration" component={registration} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/searchResults" component={SearchResults} />
        <Route path="/friends" component={Friends} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={login} />
      </Switch>
    </div>
  );
};

export default App;
