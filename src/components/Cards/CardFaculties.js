import React from 'react'
import AddUserForm from '../../models/AddUserForm';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DeleteModel from '../../models/DeleteModel';
import { toast } from 'react-hot-toast';
import { getAuthData } from '../../utils/utils';
const deptStatic = [
    {
        deptHead: {
            avatar: require('../../assets/img/team-4-470x470.png'),
            name: "dont know",
            email: "lgm@academy.ac.in"
        },
        deptName: "CSE",
        code: "MM",
        vizFaculties: 9,
        totalExpence: 72345,
    },
    {
        deptHead: {
            avatar: require('../../assets/img/team-3-800x800.jpg'),
            name: "dont Know",
            email: "dk@academy.ac.in"
        },
        deptName: "ETC",
        code: "MM",
        vizFaculties: 8,
        totalExpence: 65345,
    },
    {
        deptHead: {
            avatar: require('../../assets/img/team-2-800x800.jpg'),
            name: "dont Know",
            email: "dk@academy.ac.in"
        },
        deptName: "ELECTRICAL",
        code: "MM",
        vizFaculties: 8,
        totalExpence: 65345,
    },
    {
        deptHead: {
            avatar: require('../../assets/img/team-4-470x470.png'),
            name: "dont Know",
            email: "dk@academy.ac.in"
        },
        deptName: "CIVIL",
        code: "MM",
        vizFaculties: 8,
        totalExpence: 65345,
    },
    {
        deptHead: {
            avatar: require('../../assets/img/team-4-470x470.png'),
            name: "dont Know",
            email: "dk@academy.ac.in"
        },
        deptName: "MECH",
        code: "MM",
        vizFaculties: 8,
        totalExpence: 65345,
    },
    // {
    //   deptHead: {
    //     avatar: require('../../assets/img/team-4-470x470.png'),
    //     name: "dont Know",
    //     email: "dk@academy.ac.in"
    //   },
    //   deptName: "SCIENCE",
    //   vizFaculties: 8,
    //   totalExpence: 65345,
    // },
];

export default function CardFaculties({ isAdminDeptview = false }) {
    const auth = getAuthData();
    const { data: faculties, isLoading, refetch } = useQuery(['faculties'], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/getFaculties`, {
        headers: {
            authorization: `Bearer ${auth?.accessToken}`,
        },
    }).then(res => res.data));

    const deleteConfirm = (id) => {
        axios.delete(`${process.env.REACT_APP_API_KEY}/api/faculty/${id}`, {
            headers: {
                authorization: `Bearer ${auth?.accessToken}`
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data?.success) {
                    toast.success(res.data?.message);
                    refetch();
                }
                if (!res.data?.success) {
                    toast.error(res.data?.message);
                }
            }).catch(err => {
                console.log(err);
                toast.error(err?.response?.data?.message);
            });
    }
    // console.log(faculties);
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-slate-700 mb-1 text-sm font-semibold">
                                Faculties
                            </h6>
                            {/* <h2 className="text-white text-xl font-semibold">Expenditure vise</h2> */}
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            {!isAdminDeptview && <AddUserForm />}
                        </div>
                    </div>
                </div>
                <div className="py-8 px-4 lg:px-4 md:px-2 sm:px-1">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">{/**dark:text-gray-400 */}
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">{/*dark:bg-gray-700 dark:text-gray-400*/}
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Faculty
                                            {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                                        </div>
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        Department
                                    </th>
                                    <th scope="col" className="px-4 py-3">
                                        <div className="flex items-center">
                                            Abbrivation
                                        </div>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <div className="flex items-center">
                                            Action
                                        </div>
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {!isLoading && faculties?.faculties?.map((data, idx) => (
                                    <tr className="bg-white border-b" key={data?._id}>{/**dark:bg-gray-800 dark:border-gray-700 */}
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">{/**dark:text-white */}
                                            <img className="w-10 h-10 rounded-full" src={data?.faculty?.profilePhoto === "default" || !data?.faculty?.profilePhoto ? require("../../assets/img/user_avtar.png") : data?.faculty?.profilePhoto} alt="avatar" />
                                            <div className="pl-3">
                                                <div className="text-base font-semibold">{data?.faculty?.name}</div>
                                                <div className="font-normal text-gray-500">{data?.faculty?.email}</div>
                                            </div>
                                        </th>
                                        <td className="px-4 py-3">{/**dark:text-white */}
                                            {data?.inDepartment?.code}
                                        </td>
                                        <td className="px-4 py-3">
                                            {data?.abbrivation}
                                        </td>
                                        <td className="px-3 py-4">
                                            <div className='space-x-2 items-center lg:space-x-3 xl:space-x-4'>
                                                <button
                                                    type="button"
                                                    className="fas fa-eye fa-md"
                                                    style={{ color: "blue" }}
                                                // onClick={setPopup}
                                                >
                                                </button>
                                                <button
                                                    type="button"
                                                    className="fas fa-pen fa-md"
                                                    style={{ color: "gray" }}
                                                >
                                                </button>
                                                <DeleteModel dialog='Are you sure You want to delete this faculty ?' id={data?._id} name={data?.faculty?.name} confirmDelete={deleteConfirm} />
                                            </div>
                                        </td>
                                        {/* <td className="px-6 py-4 text-right">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td> */}
                                    </tr>
                                ))
                                }
                            </tbody>

                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}
