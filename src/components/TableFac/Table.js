import React from "react";
import "./Table.css";
import { BsFillPencilFill } from "react-icons/bs";

const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="bold">
              <th>Day</th>
              <th>10:30-11:30</th>
              <th>11:30-12:30</th>
              <th>1:00-2:00</th>
              <th>2:00-3:00</th>
              <th>3:15-4:15</th>
              <th>4:15:5:15</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              return (
                <tr key={idx}>
                  <td>{row.Day}</td>
                  <td>{row["10:30-11:30"]}</td>
                  <td>{row["11:30-12:30"]}</td>
                  <td>{row["1:00-2:00"]}</td>
                  <td>{row["2:00-3:00"]}</td>
                  <td>{row["3:15-4:15"]}</td>
                  <td>{row["4:15-5:15"]}</td>

                  <td>
                    <span className="actions">
                      <BsFillPencilFill onClick={() => editRow(idx)} />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
