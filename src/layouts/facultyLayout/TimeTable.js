import "./TimeTable.css";
import { useState } from "react";

import Table from "../../components/TableFac/Table";
import Modal from "../../components/TableFac/Modal";

function TimeTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      Day: "Monday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Tuesday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Wednesday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Thursday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Friday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Saturday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
    {
      Day: "Sunday",
      "10:30-11:30": "",
      "11:30-12:30 ": "",
      "1:00-2:00": "",
      "2:00-3:00": "",
      "3:15-4:15": "",
      "4:15-5:15": "",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <Table rows={rows} editRow={handleEditRow} />

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default TimeTable;
