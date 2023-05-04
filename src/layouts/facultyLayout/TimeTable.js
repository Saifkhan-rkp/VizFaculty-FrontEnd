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
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h6 className="uppercase text-slate-700 mb-1 text-sm font-semibold">
                    TimeTables
                  </h6>
                  {/* <h2 className="text-white text-xl font-semibold">Expenditure vise</h2> */}
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  
                </div>
              </div>
            </div>
            <Table rows={rows} editRow={handleEditRow} />
          </div>
        </div>
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
    </>
  );
}

export default TimeTable;
