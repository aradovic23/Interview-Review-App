import React, { useState } from "react";
import "./WizardForm.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WizardForm = () => {
  const [date, setDate] = useState(Date.now());

  return (
    <div className="report-form">
      <div>
        <div>
          <span>
            Select a date:
            <DatePicker
              selected={date}
              maxDate={Date.now()}
              onChange={(date) => setDate(date)}
            />
          </span>
        </div>

        <span>
          Select a phase:
          <select name="phase" id="phase">
            <option value="hr">HR</option>
            <option value="cv">CV</option>
            <option value="technical">Tech</option>
            <option value="final">Final</option>
          </select>
        </span>
        <span>
          Select a status:
          <input type="radio" name="status" id="passed" /> Passed
          <input type="radio" name="status" id="declined" /> Declined
        </span>
      </div>
      <div className="textarea">
        <textarea
          name="note"
          id="note"
          cols="70"
          rows="15"
          placeholder="Write a quick note about the candidate. . ."
        ></textarea>
      </div>
    </div>
  );
};

export default WizardForm;
