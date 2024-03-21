import React, { useState } from "react";
import { DatePicker, Panel, Steps } from "rsuite";
import "rsuite/dist/rsuite.css";
import "rsuite/Panel/styles/index.less"
// import DatePicker from "tailwind-datepicker-react";

// const styles = {
//   width: "200px",
//   display: "inline-table",
//   verticalAlign: "top",
// };

export default function Salary() {
  const [step, setStep] = useState(0);
  const [dateError, setDateError] = useState(false);
  const [rangeDate, setRangeDate] = useState({
    fromDate: new Date(),
    toDate: new Date().setMonth(new Date().getMonth() + 1)
  })
  const handleChangeDate = (selectedDate, dateType) => {
    if (dateType === "fromDate" && rangeDate.toDate < selectedDate) {
      setDateError(true);
    } else if (dateType === "toDate" && rangeDate.fromDate > selectedDate) {
      setDateError(true);
    }
    else {
      setDateError(false);
      setRangeDate(state => ({
        ...state,
        [`${dateType}`]: selectedDate
      }))
    }
    console.log(rangeDate);
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-100">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  {/* <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">
                    Departments
                  </h6> */}
                  <h2 className="text-slate-700 text-xl font-semibold">Salary Application Status</h2>
                </div>
              </div>
            </div>
            {/* Body card start */}
            <div className="p-4 flex-auto">
              <div className="relative">
                <Steps current={step} vertical={false}>
                  <Steps.Item title="Salary Request" description="Form" />
                  <Steps.Item title="Forwarded to" description="Hod" />
                  <Steps.Item title="Forwarded to" description="Admin" />
                  <Steps.Item title="Salary Disbursed" description="" />
                </Steps>
                <hr />
                <Panel header={"Salary Form"}>
                  <form>

                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          From
                        </label>
                        <DatePicker
                          size="lg"
                          defaultValue={rangeDate.fromDate}
                          // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          label={"From Date"}
                          onOk={(date, event) => { handleChangeDate(date, "fromDate") }}
                        ></DatePicker>
                        {/* <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} ></DatePicker> */}
                        {dateError && <p className="text-red-500 text-xs italic">From date must smaller than to date.</p>}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          To
                        </label>
                        {/* <DAte */}
                        <DatePicker
                          size="lg"
                          defaultValue={rangeDate.toDate}
                          // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          label={"To Date"}
                          onOk={(date, event) => { handleChangeDate(date, "toDate") }}
                        ></DatePicker>
                        {dateError && <p className="text-red-500 text-xs italic">To date must greater than from date.</p>}
                        {/* <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} ></DatePicker> */}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                          Phoene Number
                        </label>

                        <input name="contactNo" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane" />
                        {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                          Total Salary Amount
                        </label>
                        <input name="amount" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                      </div>
                    </div>
                  </form>
                </Panel>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  {/* <h6 className="uppercase text-slate-400 mb-1 text-xs font-semibold">
                    Previous Salary Applications
                  </h6> */}
                  <h2 className="text-slate-700 text-xl font-semibold">
                    Previous Salary Applications
                  </h2>
                  <div className="p-4 flex-auto">
                    <div className="relative h-350-px">

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
