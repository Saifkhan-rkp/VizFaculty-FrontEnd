import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  // const location = useLocation();
  const { isLoading, user, loading } = useAuth();

  useEffect(() => {
    if (!isLoading && !loading && user?.user) {
      let from = "/";
      if (user?.user?.role === "deptHead")
        from = "/dept";
      else if (user?.user?.role === "faculty")
        from = "/faculty";
      else if (user?.user?.role === "adminDept")
        from = "/adminDept";
      navigate(from);
    }
  }, [isLoading, loading, user]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onChange' });
  const [isItLoading, setLoading] = useState(false);
  // console.log(location.state?.from?.pathname);
  const onSubmit = (data) => {
    // let from = '/';
    // console.log(data);
    // mutate(data);
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/api/auth/login`, data)
      .then((res) => {
        setLoading(false);
        if (res.data.success) {
          toast.success(res.data?.message);
          const authData = res?.data?.user;
          localStorage.setItem("auth", JSON.stringify(authData))
          window.location.reload();
        }
        // if (!res.data.success) {
        //   toast.error(res.data.message);
        // }

      })
      // .then(() => refetch())
      .catch((e) => {
        // console.log(e);
        setLoading(false);
        toast.error(e?.response?.data?.message || e?.message || "Unable to login!");
      });
  };
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-slate-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  {/* <button
                    className="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/github.svg").default}
                    />
                    Github
                  </button> */}
                  <button
                    className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
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
                <hr className="mt-6 border-b-1 border-slate-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-slate-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  action="#"
                >
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register('email', {
                        required: '*Email Address is required',
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register('password', {
                        required: '*Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be 8 characters or longer',
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-600">{errors.password?.message}</p>
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
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => navigate('/auth/forget-password')}
                  className="text-slate-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-slate-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
            {isItLoading &&
              <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <div className="w-12 h-12 rounded-full animate-spin border-y-2 border-solid border-yellow-500 border-t-transparent shadow-md"></div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}
