import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ForgetPassword() {
    const [regResponse, setRegResp] = useState(false);
    const [response, setResponse] = useState({ email: "jhondoe@email.com" });
    const [error, setError] = useState('');
    const [isSubmitting, setSubmitting] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,

    } = useForm({ mode: 'onChange' });
    const onSubmit = (data) => {
        // console.log(data);
        // mutate(data);
        setSubmitting(true);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/api/forget-password`, data)
            .then((res) => {
                setSubmitting(false);
                if (res.data.success) {
                    toast.success(res.data.message);
                    setRegResp(true);
                    setResponse(res.data);
                }
                if (!res.data.success) {
                    setError(res.data.message);
                    toast.error(res.data.message);
                }
            })
            .catch((e) => {
                console.log(e);
            });
        setSubmitting(false);
    };
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        {!regResponse &&
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-slate-500 text-sm font-bold">
                                            Forgot Password
                                        </h6>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-slate-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <div className="text-slate-400 text-center mb-3 font-bold">
                                        <small>Enter registered email to get reset email</small>
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        {error && (
                                            <h2 className="text-md text-rose-600 my-10">*{error}</h2>
                                        )}
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
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

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Send Reset Email
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {isSubmitting &&
                                    <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                        <div className="w-12 h-12 rounded-full animate-spin border-y-2 border-solid border-yellow-500 border-t-transparent shadow-md"></div>
                                    </div>
                                }
                                {/* </div> */}
                            </div>
                        }
                        {regResponse && <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-slate-500 text-sm font-bold">
                                        Reset Password
                                    </h6>
                                </div>
                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-slate-400 text-center mb-3 font-bold">
                                    {/* <small>Enter registered email to get reset email</small> */}
                                </div>
                                <p className="text-justify">Hello there, please check your email inbox/spam password reset email has been sent to <b>{response?.email}</b>. Password reset link will be valid for 2 hours.</p>
                                <br />
                                <footer class="block"> - Team VizFaculty </footer>
                            </div>
                        </div>
                        }
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <Link to="/auth/login" className="text-slate-200">
                                    <small>Have an account?</small>
                                </Link>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/auth/register" className="text-slate-200">
                                    <small>Create new account</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
