import React, { useState } from "react";
import "./ReportCardAdmin.scss";
import { MdSearch } from "react-icons/md";
import TableRow from "../TableRow/TableRow";

const ReportCardAdmin = ({ reports, setReports }) => {
  const [searchTerm, setSearchTerm] = useState("");

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
        {reports
          // eslint-disable-next-line array-callback-return
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.candidateName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return value;
            } else if (
              value.companyName
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((e) => (
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
            />
          ))}
      </section>
    </>
  );
};

export default ReportCardAdmin;
