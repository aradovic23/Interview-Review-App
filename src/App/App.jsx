import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCandidates } from "../fetch/fetch";
import Home from "../pages/Home/Home";
import Candidate from "../pages/Candidate/Candidate";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Wizard from "../pages/Wizard/Wizard";

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidates().then((data) => {
      setCandidates(data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home candidates={candidates} />
        </Route>
        <Route path="/candidate/:id">
          <Candidate candidates={candidates} />
        </Route>
        <Route
          path="/character/:id"
          render={(r) => <Candidate {...r} candidates={candidates} />}
        ></Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/admin">
          <Admin></Admin>
        </Route>

        <Route path="/wizard">
          <Wizard></Wizard>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
