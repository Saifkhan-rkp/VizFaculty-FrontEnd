import React from "react";
import { createPopper } from "@popperjs/core";
import axios from "axios";
import { getAuthData } from "../../utils/utils";
import toast from "react-hot-toast";

const TableActionDropdown = ({ applicationId, isDeptView }) => {
  // dropdown props
  const auth = getAuthData();
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const updateApplicationStatus = (status) => {
    axios.post(`${process.env.REACT_APP_API_KEY}/api/salary-request/updateStatus`,
      { id: applicationId, status },
      {
        headers: {
          authorization: `Bearer ${auth?.accessToken}`
        }
      }).then(res => {
        res.data?.success &&
          toast.success(res.data?.message);
      }).catch(err => {
        toast.error(err?.message);
      })
  }

  return (
    <>
      <button
        className="text-slate-500 py-1 px-3"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-vertical fa-lg"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          " bg-gray-100 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
          }
          onClick={() => updateApplicationStatus("approved")}
        >
          Approve
        </div>
        {!isDeptView &&
          <div
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
            }
            onClick={() => updateApplicationStatus("paid")}
          >
            Paid
          </div>}
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
          }
          onClick={() => updateApplicationStatus("rejected")}
        >
          Reject
        </div>
        <div
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 cursor-pointer"
          }
          onClick={() => updateApplicationStatus("sentback")}
        >
          Sent Back
        </div>
      </div>
    </>
  );
};

export default TableActionDropdown;
