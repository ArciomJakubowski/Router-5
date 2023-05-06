import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./component/mainPage";
import Users from "./layouts/users";

function App() {
  return (
    <>
      <div>
        <h1>APP</h1>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/users/:userId?/:profile?/:edit?" component={Users} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
