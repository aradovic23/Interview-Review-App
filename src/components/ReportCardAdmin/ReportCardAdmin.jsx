import React, { useState, useEffect } from "react";
import "./ReportCardAdmin.scss";
import { MdSearch } from "react-icons/md";
import TableRow from "../TableRow/TableRow";

const ReportCardAdmin = ({ reports, setReports }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      reports?.filter(
        (e) =>
          e.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.companyName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, reports]);

  return (
    <>
      <section className="search-holder">
        <div className="search-admin">
          <input
            type="search"
            name="search"
            id="search-admin"
            placeholder="Search for companies and candidates"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <button id="admin-search-button">
            <MdSearch size="24px" />
          </button>
        </div>
      </section>
      <section>
        {filtered?.map((e) => (
          <TableRow
            name={e.candidateName}
            company={e.companyName}
            date={e.interviewDate}
            phase={e.phase}
            status={e.status}
            note={e.note}
            id={e.id}
            reports={reports}
            setReports={setReports}
            key={e.id}
          />
        ))}
      </section>
    </>
  );
};

export default ReportCardAdmin;
