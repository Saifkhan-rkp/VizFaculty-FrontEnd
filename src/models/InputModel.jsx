
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
// import { Modal, Ripple, initTE } from "tw-elements";
export default function InputModel({ saveFunction = () => { } }) {
    // initTE({ Modal, Ripple });
    const str = "\t";
    const [flag, setFlag] = useState(false);

    const setPopup = () => {
        setFlag(!flag)
    }

    const { register, formState: { errors }, handleSubmit, } = useForm({ mode: 'onChange' });

    // useEffect(()=> {if(success) refetch();},[success]);
    return (
        <>
            <button
                className={"bg-blue-500 text-white active:bg-blue-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}
                type="button"
                onClick={setPopup}
            >
                <i className='fas fa-plus' style={{ color: "white" }} />
                Add Time
            </button>
            {flag &&
                (
                    <div
                        className="z-50 fixed w-full overflow-y-auto overflow-x-hidden justify-center inset-0" //fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none
                    >
                        <div onClick={setPopup} className="w-full h-full bg-transparent z-0 absolute inset-0" />
                        <div
                            className="mx-auto container w-1/3 lg:w-1/3 md:w-1/2 sm:w-11/12 max-sm:w-full">
                            <div
                                className="relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">{/*dark:bg-neutral-600*/}
                                <div
                                    className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4">{/**dark:border-opacity-50 */}
                                    <h5
                                        className="text-xl font-medium leading-normal text-neutral-800" //dark:text-neutral-200
                                        id="exampleModalScrollableLabel">
                                        Add TimeTable
                                    </h5>
                                    <button
                                        type="button"
                                        className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                        onClick={setPopup}
                                    >
                                        <i className="fas fa-xmark fa-xl" style={{ color: "gray" }} />
                                    </button>
                                </div>
                                <div className="relative p-4 text-center">
                                    <form onSubmit={handleSubmit(saveFunction)} >
                                        <div className="relative w-10/12 justify-center text-left mb-3">
                                            <div className='grid grid-cols-2'>
                                                <div className='col'>
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                        htmlFor="from"
                                                    >
                                                        From
                                                    </label>
                                                    <input type='time' name='from' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                                                        {...register('from', {
                                                            required: '*Value must be required',
                                                        })}
                                                    />
                                                    {errors.from && (
                                                        <p className="text-red-600">{errors.name?.message}</p>
                                                    )}
                                                </div>
                                                <div className='col'>
                                                    <label
                                                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                        htmlFor="to"
                                                    >
                                                        To
                                                    </label>
                                                    <input type='time' name='to' className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
                                                        {...register('to', {
                                                            required: '*Value must be required',
                                                        })}
                                                    />
                                                    {errors.to && (
                                                        <p className="text-red-600">{errors.name?.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                            {/* <label
                                                className="block uppercase text-slate-600 text-xs font-bold mb-2"
                                                htmlFor="name"
                                            >
                                                Name Of TimeTable
                                            </label>
                                            <input
                                                {...register('name', {
                                                    required: '*Value must be required',
                                                    maxLength: {
                                                        value: 20,
                                                        message: 'Name must be 20 characters or below',
                                                    },
                                                })}
                                                name='name'
                                                id='name'
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="some value..."
                                            />
                                            {errors.name && (
                                                <p className="text-red-600">{errors.name?.message}</p>
                                            )} */}
                                        </div>
                                        <div className="relative w-full mb-3">
                                        </div>
                                        <div
                                            className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">{/**dark:border-opacity-50 */}
                                            <button
                                                type="cancel"
                                                className="inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-accent-100 focus:bg-blue-accent-100 focus:outline-none focus:ring-0 active:bg-blue-accent-200"
                                                onClick={setPopup}
                                            >
                                                Close
                                            </button>
                                            <button
                                                type="submit"
                                                className="ml-1 inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "//dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                                            // onClick={() => addTimetable(setPopup)}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="relative p-4 text-center">

                                    <p></p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
