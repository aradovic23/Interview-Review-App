import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCandidates, getReports, getCompanies } from "../fetch/fetch";
import Home from "../pages/Home/Home";
import Candidate from "../pages/Candidate/Candidate";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Wizard from "../pages/Wizard/Wizard";

function App() {
  const [candidates, setCandidates] = useState([]);
  const [reports, setReports] = useState([]);
  const [companies, setCompanies] = useState([]);
  let tokenNew = localStorage.getItem("token");
  const [token, setToken] = useState(tokenNew);

  useEffect(() => {
    getCandidates().then((data) => {
      setCandidates(data);
    });
  }, []);

  useEffect(() => {
    getReports().then((data) => {
      setReports(data);
    });
  }, []);

  useEffect(() => {
    getCompanies().then((data) => {
      setCompanies(data);
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home candidates={candidates} token={token} setToken={setToken} />
        </Route>
        <Route path="/candidate/:id">
          <Candidate
            candidates={candidates}
            reports={reports}
            token={token}
            setToken={setToken}
          />
        </Route>
        <Route
          path="/character/:id"
          render={(r) => (
            <Candidate
              {...r}
              candidates={candidates}
              token={token}
              setToken={setToken}
            />
          )}
        ></Route>
        <Route path="/login">
          {token ? (
            <Redirect to="/admin" />
          ) : (
            <Login token={token} setToken={setToken} />
          )}
        </Route>

        <Route path="/admin">
          {token ? (
            <Admin reports={reports} token={token} setToken={setToken}></Admin>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route path="/wizard">
          {token ? (
            <Wizard
              candidates={candidates}
              token={token}
              setToken={setToken}
              companies={companies}
            ></Wizard>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
