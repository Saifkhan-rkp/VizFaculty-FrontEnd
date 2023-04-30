import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function CompleteRegister() {
  const {token, email} = useParams();
  const [regResponse, setRegResp] = useState(false); // set register response
  const [response, setResponse] = useState({ user: { name: "Jhon Doe", email: "jhondoe@mail.com" } });
  const [isSubmitting, setSubmitting] = useState(false);
  //Form Handling
  // console.log(process.env.REACT_APP_API_KEY);
  const { register, handleSubmit, getValues, formState: { errors }, } = useForm({ mode: "onChange" });
  const { password } = getValues();

  const muteFunc = async (data) => {
    setSubmitting(true)
    return await axios.post(`${process.env.REACT_APP_API_KEY}/api/auth/completeRegister/${token}`, data);
  }
  const { mutate } = useMutation(muteFunc, {
    onSuccess: (res) => {
      setSubmitting(false);
      if (res.data.success) {
        toast.success(`Welcome to VizFaculty, ${res.data?.user?.name}`);
        setRegResp(true);
        setResponse(res.data);
        // navigate('/auth/login');
      }
      if (!res.data.success) {
        toast.error(res.data.message);
      }
    },
    onError: (err) => {
      setSubmitting(false);
      toast.error(err.response.data.message);
    },
  })


  const onSubmit = (data) => {
    const registerData = { ...data };
    mutate(registerData);
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            {!regResponse &&
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-sm font-bold">
                      Complete Register
                    </h6>
                  </div>
                  {/* <div className="btn-wrapper text-center">
                    <button
                    className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/github.svg").default}
                    />
                    Github
                  </button>
                    <button
                      className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src={require("../../assets/img/google.svg").default}
                      />
                      Google
                    </button>
                  </div>
                  <hr className="mt-6 border-b-1 border-slate-300" /> */}
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  {/* <div className="text-slate-400 text-center mb-3 font-bold">
                    <small>Or sign up with credentials</small>
                  </div> */}
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    action="#"
                  >
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        {...register('name', {
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
                      {errors?.name?.type === 'pattern' && (
                        <p className="text-red-500">*Alphabetical characters only</p>
                      )}
                      {errors?.name?.type === 'maxLength' && (
                        <p className="text-red-500">
                          *Name cannot exceed 40 characters
                        </p>
                      )}
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        {...register('email', { required: true })}
                        type="email"
                        id="email"
                        name="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disable"
                        defaultValue={email}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        {...register('password', {
                          required: true,

                          pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        })}

                        id="password"
                        type="password"
                        name="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                      {errors?.password?.type === 'pattern' && (
                        <p className="text-red-500">
                          *Minimum 8 Character, include one letter and one number
                        </p>
                      )}
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        {...register('confirmPassword', {
                          validate: (val) =>
                            password === val || 'Passwords should match!',
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

                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-600">
                          I agree with the{" "}
                          <a
                            href="#pablo"
                            className="text-sky-500"
                            onClick={(e) => e.preventDefault()}
                          >
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            }
            {regResponse && <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-slate-500 text-sm font-bold">
                    Welcome To VizFaculty
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-slate-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-slate-400 text-center mb-3 font-bold">
                  {/* <small>Enter registered email to get reset email</small> */}
                </div>
                <p className="text-justify">Hello <strong>{response?.user.name}</strong> Please login to Continue and Explore VizFaculty.</p>
                <br />
                <footer class="block"> - Team VizFaculty </footer>
              </div>
            </div>
            }
            {isSubmitting &&
              <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <div className="w-12 h-12 rounded-full animate-spin border-y-2 border-solid border-yellow-500 border-t-transparent shadow-md"></div>
              </div>
            }
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2 ">
                <Link to="/auth/login" className="text-slate-200">
                  <small>Already have an account ?</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
