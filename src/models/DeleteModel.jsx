import React, { useState } from 'react'
// import { Modal, Ripple, initTE } from "tw-elements";

export default function DeleteModel({ dialog = "Are you sure You want to delete Selected Item..?", name = "User", confirmDelete, id }) {
    // initTE({ Modal, Ripple });
    const str = "\t";
    const [flag, setFlag] = useState(false);
    const setPopup = () => {
        setFlag(!flag)
        // if (flag) {
        //     document.getElementById("POPUP").classList.add("hidden");
        // } else {
        //     document.getElementById("POPUP").classList.remove("hidden");
        // }
    }
    return (
        <>
            <button
                type="button"
                className="fas fa-trash fa-md"
                style={{ color: "red" }}
                onClick={setPopup}
            />
            {flag &&
                (
                    <div
                        className="z-50 fixed w-full overflow-y-auto overflow-x-hidden justify-center inset-0" //fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none
                        id={name}
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
                                        Delete {str + name}
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
                                    <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                                        <i className="fa-solid fa-triangle-exclamation fa-beat-fade fa-xl" style={{ color: "red" }}></i>
                                    </div>
                                    <p>{dialog}</p>
                                </div>

                                <div
                                    className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4">{/**dark:border-opacity-50 */}
                                    <button
                                        type="button"
                                        className="inline-block rounded bg-blue-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-accent-100 focus:bg-blue-accent-100 focus:outline-none focus:ring-0 active:bg-blue-accent-200"
                                        onClick={setPopup}
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="ml-1 inline-block rounded bg-rose-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-rose-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-rose-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "//dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]
                                        onClick={() => confirmDelete(id)}
                                    >
                                        Delete {str + name}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}
