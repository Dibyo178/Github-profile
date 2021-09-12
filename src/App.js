import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import fakeData from "./Components/FakeData/FakeData";
import SearchBar from "./Components/Searchbar/SearchBar";
import UserFind from "./Components/UserFind/UserFind";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchBar data={fakeData} />
        </Route>
        <Route path='/user/:id' component={UserFind} >
           
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
