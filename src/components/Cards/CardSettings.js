import React from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
// components

export default function CardSettings(props) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const { password } = getValues();

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">My account</h6>
            <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Edit
            </button>
            <button
              className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Save Changes
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
                    {props.name}
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                      maxLength: 40,
                      pattern: /^[A-Za-z]+\b/i,
                    })}
                    type="text"
                    id="name"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                  {errors?.name?.type === "pattern" && (
                    <p className="text-red-500">
                      *Alphabetical characters only
                    </p>
                  )}
                  {errors?.name?.type === "maxLength" && (
                    <p className="text-red-500">
                      *Name cannot exceed 40 characters
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {props.Email}
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    name="email"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {props.name2}
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    {props.code}
                  </label>
                  <input
                    Disabled
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={props.codeVal}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
              Change Password
            </h6>
            <div className="flex flex-wrap flex justify-center">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Old Password
                  </label>
                  <input
                    {...register("OldPassword", {
                      required: true,

                      pattern:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    })}
                    id="OldPassword"
                    type="OldPassword"
                    name="OldPassword"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Old Password"
                  />
                  {errors?.OldPassword?.type === "pattern" && (
                    <p className="text-red-500">
                      *Minimum 8 Character, include one letter and one number
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
                    New Password
                  </label>
                  <input
                    type="password"
                    {...register("NewPassword", {
                      validate: (val) => password === val || "",
                    })}
                    id="NewPassword"
                    name="NewPassword"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="New Password"
                    // onChange={(self)=>{ document.getElementById("password").value === self.value}}
                  />
                  {errors?.NewPassword && (
                    <p className="text-red-500">
                      {errors?.NewPassword?.message}
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
                      validate: (val) =>
                        password === val || "Passwords should match!",
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
              >
                Reset Password
              </button>
              {/* <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div> */}
            </div>

            <hr className="mt-6 border-b-1 border-slate-300" />

            <h6 className="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
