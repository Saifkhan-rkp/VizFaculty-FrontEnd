import axios from "axios";
import React, { useEffect, useState } from "react";
import { DatePicker, Steps } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "rsuite/Panel/styles/index.less"
import { getAuthData } from "../../utils/utils";
import toast from "react-hot-toast";
// import DatePicker from "tailwind-datepicker-react";

// const styles = {
//   width: "200px",
//   display: "inline-table",
//   verticalAlign: "top",
// };

export default function Salary() {
  const auth = getAuthData();
  const [step, setStep] = useState(0);
  const [editForm, setEditForm] = useState(true);
  const [prevForm, setPrevForm] = useState({})
  const [refetching, setRefetching] = useState(false);
  const [dateError, setDateError] = useState(false);
  const today = new Date();
  today.setMonth(today.getMonth() === 0 ? 11 : today.getMonth() - 1)
  const [inputData, setInputData] = useState({
    amount: "",
    contactNo: "",
    dateFrom: today,
    dateTo: new Date()
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_KEY}/api/salary-request/latest`, {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    }).then(res => {
      console.log(res.data)
      if (res.data?.success) {
        const data = res.data?.salaryRequest;
        setInputData({
          contactNo: res.data?.salaryRequest?.contactNo,
          amount: res.data?.salaryRequest?.amount,
          dateFrom: new Date(res.data?.salaryRequest?.dateFrom),
          dateTo: new Date(res.data?.salaryRequest?.dateTo)
        });
        const stepCalculate = (data?.forwardToHead?.isForwarded ? 1 : 0) + (data?.forwardToAdminDept?.isForwarded ? 1 : 0) + (data?.forwardToAdminDept?.status === "paid" ? 1 : 0);
        console.log(stepCalculate)
        setStep(stepCalculate);
        const forwardedTo = stepCalculate > 1 ? "Forworded To Admin Department" : "Forwarded To HoD";

        setPrevForm({
          _id: data?._id,
          contactNo: data?.contactNo,
          amount: data?.amount,
          dateFrom: new Date(data?.dateFrom),
          dateTo: new Date(data?.dateTo),
          applyDate: new Date(data?.applyDate),
          status: stepCalculate > 1 ? data.forwardToAdminDept?.status : data?.forwardToHead?.status,
          forwardedTo,
          forwardedDate: stepCalculate > 1 ? data.forwardToAdminDept?.date : data?.forwardToHead?.date,
        });
        setEditForm(false);
      }
    }).catch(err => {
      toast.error(err?.message)
    })
  }, [auth?.accessToken])
  const handleChangeDate = (selectedDate, dateType) => {
    if (dateType === "dateFrom" && inputData.dateTo < selectedDate) {
      setDateError(true);
    } else if (dateType === "dateTo" && inputData.dateFrom > selectedDate) {
      setDateError(true);
    }
    else {
      setDateError(false);
      setInputData(state => ({
        ...state,
        [dateType]: selectedDate
      }))
    }
    // console.log(rangeDate);
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData(state => ({
      ...state,
      [name]: value
    }));
  }
  const onRefetchSalaryAmount = () => {
    setRefetching(true);
    axios.post(`${process.env.REACT_APP_API_KEY}/api/salary-request/salaryByDateRange`,
      {
        dateFrom: inputData.dateFrom,
        dateTo: inputData.dateTo
      }, {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    }).then(res => {
      setRefetching(false);
      if (res.data?.success) {
        setInputData(state => ({
          ...state,
          amount: res.data?.totalSalary
        }))
      }
      // console.log(res.data);
    }).catch(err => {
      setRefetching(false);
      toast.error(err?.message);
    })
  }

  const onSubmitSalaryForm = (event) => {
    event.preventDefault();
    console.log("executing...");
    axios.post(`${process.env.REACT_APP_API_KEY}/api/salary-request/generate`, {
      applyDate: new Date(),
      amount: inputData.amount,
      contactNo: inputData.contactNo,
      dateFrom: inputData.dateFrom,
      dateTo: inputData.dateTo
    }, {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    }).then(res => {
      if (res.data?.success) {
        toast.success(res?.data?.message)
        event.target.reset();
      }

    }).catch(err => {
      toast.error(err?.message);
    })
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
                {editForm ?
                  <div class="container mx-auto px-4 py-8">
                    <div class="rounded-lg shadow-md bg-white overflow-hidden">
                      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Salary Application Form</h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500 sm:mt-2"></p>
                      </div>
                      <form onSubmit={onSubmitSalaryForm} action="#">
                        <div class="px-4 py-5 sm:p-6">
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                From
                              </label>
                              <DatePicker
                                size="lg"
                                defaultValue={inputData.dateFrom}
                                // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                label={"From Date"}
                                onOk={(date, event) => { handleChangeDate(date, "dateFrom") }}
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
                                defaultValue={inputData.dateTo}
                                // className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                label={"To Date"}
                                onOk={(date, event) => { handleChangeDate(date, "dateTo") }}
                              ></DatePicker>
                              {dateError && <p className="text-red-500 text-xs italic">To date must greater than from date.</p>}
                              {/* <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} ></DatePicker> */}
                            </div>
                          </div>
                          <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label htmlFor="amount" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Total Salary Amount
                              </label>
                              <div className="flex items-center mt-2">
                                <div className="relative w-full">
                                  <input type="text" name="amount" value={inputData.amount} id="amount" onChange={handleInputChange} aria-describedby="helper-text-explanation" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-e-0 rounded-s-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="300000" required />
                                  {/* <input   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="30,0000" /> */}
                                </div>
                                <button onClick={onRefetchSalaryAmount} disabled={refetching} id="dropdown-verification-option-button" data-dropdown-toggle="dropdown-verification-option" className="flex-shrink-0 inline-flex items-center space-y-1 py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">
                                  <p className=" mr-1">Refetch</p> {" "} <i className={`fa fa-refresh ${refetching ? "animate-spin" : " "}`}></i>
                                </button>
                              </div>
                              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                              <label htmlFor="contactNo" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Contact No
                              </label>
                              <div className="flex items-center mt-2">
                                <button id="dropdown-phone-button" value={"+91"} data-dropdown-toggle="dropdown-phone" className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center bg-gray-200 text-gray-700 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 " type="button">
                                  +91 <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                                </button>
                                <div className="relative w-full">
                                  <input name="contactNo" value={inputData.contactNo} onChange={handleInputChange} aria-describedby="helper-text-explanation" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="contactNo" type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:flex items-center justify-center">
                            <button
                              className="mt-5 mb-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex justify-center"
                              type="button"
                              onClick={() => setEditForm(false)}
                            >
                              Previous Form
                            </button>
                            <button
                              className="mt-5 mb-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex justify-center"
                              type="submit"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  :
                  <>
                    <div class="container mx-auto px-4 py-8">
                      <div class="flex justify-between items-center mb-4">
                        <h2 class="text-xl font-medium text-gray-800">Salary Application Progress</h2>
                        <button onClick={() => setEditForm(true)} class="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">SUBMIT NEW FORM</button>
                      </div>
                      <div class="rounded-lg shadow-md bg-white overflow-hidden">
                        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                          <h3 class="text-lg font-medium leading-6 text-gray-900">Salary Request</h3>
                          <p class="mt-1 max-w-2xl text-sm text-gray-500 sm:mt-2">Track the progress of your salary application here.</p>
                        </div>
                        <div class="px-4 py-5 sm:p-6">
                          <div class="sm:flex justify-between items-center">
                            <div class="text-sm text-gray-500">
                              <p>Applied date:</p>
                              <p class="mt-1">Date From:</p>
                              <p class="mt-1">Date To:</p>
                              <p class="mt-1">Total Salary Amount:</p>
                              <p class="mt-1">Contact No:</p>
                            </div>
                            <div class="text-sm font-medium text-gray-900 mt-2 sm:mt-0">
                              <p>{new Date(prevForm.applyDate).toLocaleDateString()}</p>
                              <p class="mt-1">{prevForm?.dateFrom?.toLocaleDateString()}</p>
                              <p class="mt-1">{prevForm?.dateTo?.toLocaleDateString()}</p>
                              <p class="mt-1"><i className="fas fa-indian-rupee-sign"></i>{prevForm?.amount}</p>
                              <p class="mt-1">{prevForm?.contactNo}</p>
                            </div>
                          </div>
                          <div class="mt-4 sm:mt-8 flex justify-between">
                            <div class="flex items-center">
                              <span class="mr-2 text-gray-700">Status:</span>
                              {/* <div class="h-2 rounded-full bg-gray-200 w-24 sm:w-32"> */}
                              {/* <div class="h-full rounded-full bg-blue-500 w-6"></div> */}
                              <p>{prevForm.status.toUpperCase()}</p>
                              {/* </div> */}
                            </div>
                            <div class="text-sm text-gray-500">{prevForm.forwardedTo}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
              </div>
            </div>
          </div>
        </div >
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
      </div >
    </>
  );
}
