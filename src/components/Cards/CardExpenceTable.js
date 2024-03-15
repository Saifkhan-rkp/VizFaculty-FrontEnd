import React from "react";
const deptStatic = [
  {
    deptHead: {
      avatar: require('../../assets/img/team-4-470x470.png'),
      name: "dont know",
      email: "lgm@.academy.ac.in"
    },
    deptName: "CSE",
    vizFaculties: 9,
    totalExpence: 72345,
  },
  {
    deptHead: {
      avatar: require('../../assets/img/team-3-800x800.jpg'),
      name: "dont Know",
      email: "dk@.ac.in"
    },
    deptName: "ETC",
    vizFaculties: 8,
    totalExpence: 65345,
  },
  {
    deptHead: {
      avatar: require('../../assets/img/team-2-800x800.jpg'),
      name: "dont Know",
      email: "dk@.ac.in"
    },
    deptName: "ELECTRICAL",
    vizFaculties: 8,
    totalExpence: 65345,
  },
  {
    deptHead: {
      avatar: require('../../assets/img/team-4-470x470.png'),
      name: "dont Know",
      email: "dk@.ac.in"
    },
    deptName: "CIVIL",
    vizFaculties: 8,
    totalExpence: 65345,
  },
  {
    deptHead: {
      avatar: require('../../assets/img/team-4-470x470.png'),
      name: "dont Know",
      email: "dk@.ac.in"
    },
    deptName: "MECH",
    vizFaculties: 8,
    totalExpence: 65345,
  },
  // {
  //   deptHead: {
  //     avatar: require('../../assets/img/team-4-470x470.png'),
  //     name: "dont Know",
  //     email: "dk@.ac.in"
  //   },
  //   deptName: "SCIENCE",
  //   vizFaculties: 8,
  //   totalExpence: 65345,
  // },
];

export default function CardExpenceTable() {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-slate-100 mb-1 text-xs font-semibold">
                Departments
              </h6>
              <h2 className="text-white text-xl font-semibold">Expenditure vise</h2>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-gray-500 text-white active:bg-gray-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          {/* <div className="relative h-350-px"> */}
          {/* <canvas id="line-chart"></canvas> */}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Department Head
                      {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <div className="flex items-center">
                      Visiting Faculty
                      <a href="#whohooo"> <i className="fa-solid fa-sort" /></a>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Total Expenditure
                      <a href="#whohooo"><i className="fa-solid fa-sort" /></a>
                    </div>
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                </tr>
              </thead>
              <tbody>
                {deptStatic.map((data,idx) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={idx}>
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                      <img className="w-10 h-10 rounded-full" src={data.deptHead.avatar} alt="avatar" />
                      <div className="pl-3">
                        <div className="text-base font-semibold">{data.deptHead.name}</div>
                        <div className="font-normal text-gray-500">{data.deptHead.email}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4 dark:text-white">
                      {data.deptName}
                    </td>
                    <td className="px-4 py-3">
                      {data.vizFaculties}
                    </td>
                    <td className="px-6 py-4">
                      <i className="fas fa-indian-rupee-sign">{" "}</i>
                      {data.totalExpence}
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

          {/* </div> */}
        </div>
      </div>
    </>
  );
}


// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// const data = [
//   {
//     department:"abxsdv",
//     expenditure:78333
//   },
//   {
//     department:"vzxdf",
//     expenditure:74333
//   },
//   {
//     department:"zdxfbdfb",
//     expenditure:72333
//   },
//   {
//     department:"fbzdfbfd",
//     expenditure:79333
//   },
//   {
//     department:"iulugfh",
//     expenditure:67889
//   },
//   {
//     department:"rehhzd",
//     expenditure:78333
//   },
//   {
//     department:"etjsbatr",
//     expenditure:78333
//   },
//   {
//     department:"tncvsrj",
//     expenditure:78333
//   },
// ]

// {/* Chart */}
// {/* <div className="relative h-350-px overflow-x-auto">
// <div className="w-full max-w-md">
//     <BarChart width={500} height={300} data={data} margin={{top:20,right:30,left:20,bottom:5}}>
//       <CartesianGrid strokeDasharray={"3 3"}/>
//       <XAxis dataKey={"department"}/>
//       <YAxis/>
//       <Tooltip></Tooltip>
//       <Legend/>
//       <Bar dataKey={"expenditure"} fill="#8884d8"/>
//     </BarChart>
// </div>
// </div> */}