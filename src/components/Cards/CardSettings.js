import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getAuthData } from "../../utils/utils";
// components

const RatesInput = ({ initRates, refetch }) => {
  const [rates, setRates] = useState(initRates);
  const onChangeRates = (e) => setRates({ ...rates, [e.target?.name]: e.target?.value });
  const ratesSubmit = () => {
    axios.put(`${process.env.REACT_APP_API_KEY}/api/dept/${getAuthData()?.roleId}`, { rates: rates }).then(res => {
      if (res.data?.success) {
        toast.success(res.data?.message);
        refetch();
      }
    }).catch(err => toast.error(err?.message || "Error: unable to update rates"))
  }
  return (
    <>
      <hr className="mt-6 border-b-1 border-slate-300" />

      <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
        Change Rates
      </h6>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="th"
            >
              Theory
            </label>
            <input
              id="TH"
              type="number"
              name="TH"
              value={rates.TH}
              onChange={onChangeRates}
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="300"
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="TU"
            >
              Tutorial
            </label>
            <input
              type="number"
              value={rates.TU}
              onChange={onChangeRates}
              id="TU"
              name="TU"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="300"
            // onChange={(self)=>{ document.getElementById("password").value === self.value}}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="PR"
            >
              Practical
            </label>
            <input
              type="number"
              value={rates.PR}
              onChange={onChangeRates}
              id="PR"
              name="PR"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            // onChange={(self)=>{ document.getElementById("password").value === self.value}}
            />
          </div>
        </div>

        <button
          className="mt-5 mb-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex justify-center"
          type="button"
          onClick={ratesSubmit}
        >
          Submit
        </button>
      </div>

    </>)
}

export const ChangePassword = () => {
  const auth = getAuthData();
  const [changePasswordLoading, setChangePasswordLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset
  } = useForm({ mode: "onChange" });
  const { newPassword, } = getValues();
  const onClickChangePassword = (data) => {
    // console.log(inputValues);
    setChangePasswordLoading(true)
    axios.post(`${process.env.REACT_APP_API_KEY}/api/auth/change-password`, data, {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    }).then(res => {
      if (res.data?.success) {
        toast.success(res.data?.message);
        reset();
      }
      setChangePasswordLoading(false)
    }).catch(err => { setChangePasswordLoading(false); toast.error(err?.response.data?.message || err?.message || "Error: unable to update rates") });
  }

  return (
    <>
      <hr className="mt-6 border-b-1 border-slate-300" />

      <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
        Change Password
      </h6>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="oldpassword"
            >
              Old Password
            </label>
            <input
              {...register("oldPassword", {
                required: true,
              })}
              id="oldPassword"
              type="password"
              name="oldPassword"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Old Password"
            />
            {errors?.oldPassword && (
              <p className="text-red-500">
                *Old password is required
              </p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              {...register("newPassword", {
                // validate: (val) => newPassword === val || "",
                required: true,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              })}
              id="newPassword"
              name="newPassword"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="New Password"
            // onChange={(self)=>{ document.getElementById("password").value === self.value}}
            />
            {errors?.newPassword && (
              <p className="text-red-500">
                {errors?.newPassword?.message}
              </p>
            )}
            {errors?.newPassword?.type === "pattern" && (
              <p className="text-red-500">
                *Minimum 8 characters required includnig symbol and alphanumeric words.
              </p>
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative w-full mb-3">
            <label
              className="block uppercase text-slate-600 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (val) =>
                  newPassword === val || "Passwords should match!",
              })}
              id="confirmPassword"
              name="confirmPassword"
              className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Retype Password"
            // onChange={(self)=>{ document.getElementById("password").value === self.value}}
            />
            {errors?.confirmPassword && (
              <p className="text-red-500">
                {errors?.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>

        <button
          className="mt-5 mb-3 bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 flex justify-center"
          type="button"
          onClick={handleSubmit(onClickChangePassword)}
          disabled={changePasswordLoading}
        >
          {changePasswordLoading ? "Submitting..." : "Change Password"}
        </button>
      </div>
    </>
  )
}


export default function CardSettings({ settingsFor, rates = { TH: 0, PR: 0, TU: 0 }, input1, input2, input3, input4, refetch = () => { } }) {
  const auth = getAuthData();
  const [submitLoading, setSubmitLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    [input1?.fieldName]: input1?.value,
    [input2?.fieldName]: input2?.value,
    [input3?.fieldName]: input3?.value,
    [input4?.fieldName]: input4?.value,
  })
  const [inputError, setInputError] = useState({
    [input1?.fieldName]: "",
    [input2?.fieldName]: "",
    [input3?.fieldName]: "",
    [input4?.fieldName]: "",
  })

  const handleChangeInput = (e) => {
    const regex = /^\s*$/;
    // if (e.target.value==="") {
    //   e.target.focused= true;
    //   return
    // }
    setInputError(state => ({ ...state, [e.target.name]: "" }))
    setInputValues(state => ({ ...state, [e.target.name]: e.target.value }))
    if (regex.test(e.target.value)) {
      // console.log("err");
      setInputError(state => ({ ...state, [e.target.name]: "Error: This is non empty field" }))
    }
  }
  // const {
  //   register,
  //   handleSubmit,
  //   getValues,
  //   formState: { errors },
  //   reset
  // } = useForm({ mode: "onChange" });
  const onClickSaveChange = () => {
    setSubmitLoading(true)
    if (inputValues[input1?.fieldName] === input1?.value && inputValues[input4?.fieldName] === input4?.value && inputValues[input3?.fieldName] === input3?.value) {
      toast.error("Seems no data changed to update!")
      setSubmitLoading(false);
      return;
    }
    if (inputValues[input1?.fieldName] === "" && inputValues[input4?.fieldName] === "" && inputValues[input3?.fieldName] === "") {
      setSubmitLoading(false);
      return toast.error("Value required in respetive field");
    }
    const data = inputValues;
    axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/settings/update`, data, {
      headers: {
        authorization: `Bearer ${auth?.accessToken}`
      }
    }).then(res => {
      if (res.data?.success) {
        setSubmitLoading(false);
        toast.success(res.data?.message);
        refetch();
        if (Object.keys(res.data?.newAuth || {}).length > 0) {
          localStorage.setItem("auth", JSON.stringify(res.data?.newAuth));
          window.location.reload(true);
        }
      }

    }).catch(err => { setSubmitLoading(false); toast.error(err?.response.data?.message || err?.message || "Error: unable to update at this moment") });

  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">My account</h6>
            {/* <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Edit
            </button> */}
            <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={onClickSaveChange}
              disabled={submitLoading}
            >
              {submitLoading?"Saving Changes...":"Save Changes"}
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {input1?.label}
                  </label>
                  <input
                    type="text"
                    id={input1?.fieldName}
                    name={input1?.fieldName}
                    className={`border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded ${inputError[input1?.fieldName] !== "" ? "border-1 border-rose-700 focus:ring-rose-500" : ""} text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Name"
                    value={inputValues[input1?.fieldName]}
                    onChange={handleChangeInput}
                  />
                </div>
                {inputError[input1?.fieldName] !== "" &&
                  <p className="text-red-500">
                    {inputError[input1?.fieldName]}
                  </p>
                }
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {input2?.label}
                  </label>
                  <input
                    // {...register("email", { required: true })}
                    type="email"
                    id={input2?.fieldName}
                    name={input2?.fieldName}
                    className={`border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded ${inputError[input2?.fieldName] !== "" ? "border-1 border-rose-700 focus:ring-rose-500" : ""} text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    placeholder="Email"
                    value={inputValues[input2?.fieldName]}
                    disabled={true}
                    onChange={handleChangeInput}
                  />
                </div>
                {inputError[input2?.fieldName] !== "" &&
                  <p className="text-red-500">
                    {inputError[input2?.fieldName]}
                  </p>
                }
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {input3?.label}
                  </label>
                  <input
                    type="text"
                    id={input3?.fieldName}
                    name={input3?.fieldName}
                    className={`border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded ${inputError[input3?.fieldName] !== "" ? "border-1 border-rose-700 focus:ring-rose-500" : ""} text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    value={inputValues[input3?.fieldName]}
                    onChange={handleChangeInput}
                  />
                </div>
                {inputError[input3?.fieldName] !== "" &&
                  <p className="text-red-500">
                    {inputError[input3?.fieldName]}
                  </p>
                }
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {input4?.label}
                  </label>
                  <input
                    disabled={settingsFor === "faculty"}
                    type="text"
                    id={input4?.fieldName}
                    name={input4?.fieldName}
                    className={`border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded ${inputError[input4?.fieldName] !== "" ? "border-1 border-rose-700 focus:ring-rose-500" : ""} text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150`}
                    value={inputValues[input4?.fieldName]}
                    onChange={handleChangeInput}
                  />
                </div>
                {inputError[input4?.fieldName] !== "" &&
                  <p className="text-red-500">
                    {inputError[input4?.fieldName]}
                  </p>
                }
              </div>
            </div>
            {settingsFor === "dept" && <RatesInput initRates={rates} refetch={refetch} />}
            <ChangePassword />
            <hr className="mt-6 border-b-1 border-slate-300" />

            {/* <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              Add Template
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <input type="file" id="myFile" name="filename" />
                  <input
                    className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 "
                    type="submit"
                  />
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
