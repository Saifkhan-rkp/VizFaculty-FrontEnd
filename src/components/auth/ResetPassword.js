import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function ResetPassword() {
    const { token } = useParams();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
    } = useForm({ mode: "onChange" });
    const { password } = getValues();

    const onSubmit = (data) => {
        // console.log(data);
        // mutate(data);
        axios
            .post(`${process.env.REACT_APP_API_KEY}/api/reset-password/${token}`, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate('/auth/login')
                    // setRegResp(true);
                    // setResponse(res.data);
                }
                if (!res.data.success) {
                    // setError(res.data.message);
                    toast.error(res.data.message);
                }
            })
            .catch((e) => {
                // console.log(e);
                toast.error(e.response.data.message);
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
                                        Reset Password
                                    </h6>
                                </div>
                                <hr className="mt-6 border-b-1 border-slate-300" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                {/* <div className="text-slate-400 text-center mb-3 font-bold">
                                    <small>Enter registered email to get reset email</small>
                                </div> */}
                                <form onSubmit={handleSubmit(onSubmit)}>
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

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Change Password
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
