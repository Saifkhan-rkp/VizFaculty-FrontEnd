import { useQuery } from "@tanstack/react-query";
import AttendenceForm from "../../components/AttendenceForm/AttendenceForm";
import CardCalendar from "../../components/Cards/CardCalendar";
import { getAuthData } from "../../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

// const TimeTableData = [
//   {
//     DayNum: 1,
//     Day: "Monday",
//     "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
//     "11:30-12:30": "Elective-2 Faculty : PJ , RG",
//     "1-2": "Professional Skills : B1 Faculty : RG, H/W Lab : B2 Faculty : PU",
//     "2-3": "Professional Skills : B1 Faculty : RG, H/W Lab : B2 Faculty : PU",
//     "3:15-4:15": "Elective-3 Faculty : LB",
//     "4:15-5:15": "None",
//   },
//   {
//     DayNum: 2,
//     Day: "Tuesday",
//     "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
//     "11:30-12:30": "Elective-2 Faculty : PJ , RG",
//     "1-2": "Professional Skills : B2 Faculty : RG, H/W Lab : B3 Faculty : PU",
//     "2-3": "Professional Skills : B2 Faculty : RG, H/W Lab : B3 Faculty : PU",
//     "3:15-4:15": "Elective-3 Faculty : LB",
//     "4:15-5:15": "None",
//   },
//   {
//     DayNum: 3,
//     Day: "Wednesday",
//     "10:30-11:30": "Open-Elective-1 Faculty : NN , AS",
//     "11:30-12:30": "Elective-2 Faculty : PJ , RG",
//     "1-2": "Professional Skills : B3 Faculty : CB, H/W Lab : B4 Faculty : AG",
//     "2-3": "Professional Skills : B3 Faculty : CB, H/W Lab : B4 Faculty : AG",
//     "3:15-4:15": "Elective-3 Faculty : LB",
//     "4:15-5:15": "None",
//   },
//   {
//     DayNum: 4,
//     Day: "Thursday",
//     "10:30-11:30": "None",
//     "11:30-12:30": "None",
//     "1-2": "None",
//     "2-3": "None",
//     "3:15-4:15": "None",
//     "4:15-5:15": "None",
//   },
//   {
//     DayNum: 5,
//     Day: "Friday",
//     "10:30-11:30":
//       "Professional Skills : B4 Faculty : RG, H/W Lab : B1 Faculty : AG, Compiler : B3 Faculty : NC",
//     "11:30-12:30":
//       "Professional Skills : B4 Faculty : RG, H/W Lab : B1 Faculty : AG, Compiler : B3 Faculty : NC",
//     "1-2": "Compiler Design Faculty : NC",
//     "2-3": "Compiler Design Faculty : NC",
//     "3:15-4:15": "Compiler Design PR Faculty : NC",
//     "4:15-5:15": "Compiler Design PR Faculty : NC",
//   },

//   {
//     DayNum: 7,
//     Day: "Saturday",
//     "10:30-11:30": "Compiler Design Faculty : NC",
//     "11:30-12:30": "Compiler Design Faculty : NC",
//     "1-2": "Compiler Design PR : B1 Faculty : NC",
//     "2-3": "Compiler Design PR : B1 Faculty : NC",
//     "3:15-4:15": "Compiler Design PR : B4 Faculty : MG",
//     "4:15-5:15": "Compiler Design PR : B4 Faculty : MG",
//   },
//   {
//     DayNum: 0,
//     Day: "Sunday",
//     "10:30-11:30": "Intellectual Property Rights",
//     "11:30-12:30": "Intellectual Property Rights",
//     "1-2": "Economic Of It",
//     "2-3": "Economic Of It",
//     "3:15-4:15": "None",
//     "4:15-5:15": "None",
//   },
// ];

export default function DashboardIndexFaculty() {
  const [date, setDate] = useState(new Date());
  const { data: mySchedule, isLoading, refetch } = useQuery(["mySchedule"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/faculty/schedule/${date?.getDay()}`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
    },
  }).then(res => res?.data));
  const today = new Date();
  const { data: todaysAttendance, isLoading: todaysAttendanceLoading  } = useQuery(["todaysAttendance"], () => axios.get(`${process.env.REACT_APP_API_KEY}/api/attendance/todays/${new Date().toDateString()}`, {
    headers: {
      authorization: `Bearer ${getAuthData()?.accessToken}`,
      // 'X-DATE':new Date().toDateString()
    },
  }).then(res => res?.data));
  console.log(todaysAttendance);

  useEffect(()=>{
    refetch();
  },[date, refetch])
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <AttendenceForm isSubmitted={true} attendanceData={{}}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCalendar scheduleData={mySchedule} isLoading={isLoading} setDate={setDate} />
        </div>
      </div>
    </>
  );
}
