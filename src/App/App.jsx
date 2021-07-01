import "./App.scss";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { getCandidates, getReports, getCompanies } from "../fetch/fetch";
import Home from "../pages/Home/Home";
import Candidate from "../pages/Candidate/Candidate";
import Login from "../pages/Login/Login";
import Admin from "../pages/Admin/Admin";
import Wizard from "../pages/Wizard/Wizard";
export const CompanyContext = React.createContext();
export const Provider = CompanyContext.Provider;

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

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);

  return (
    <div className="App">
      <Provider value={companies}>
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
              <Admin
                reports={reports}
                token={token}
                setReports={setReports}
                setToken={setToken}
              ></Admin>
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
                setReports={setReports}
                reports={reports}
              ></Wizard>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
