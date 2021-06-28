import React, { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { MdSearch } from "react-icons/md";

const Home = ({ candidates, token, setToken }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      candidates?.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, candidates]);

  return (
    <div>
      <Header token={token} setToken={setToken} />
      <div>
        <div className="search-div">
          <input
            type="search"
            name="search"
            id="home-search"
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button id="home-search-button">
            <MdSearch size="24px" />
          </button>
        </div>
      </div>
      <section id="wrapper-section">
        <div id="people-container">
          {filtered?.map((e) => (
            <Card name={e.name} id={e.id} email={e.email} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
