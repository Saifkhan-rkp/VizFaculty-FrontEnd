import { useQuery } from "@tanstack/react-query";
import AttendenceForm from "../../components/AttendenceForm/AttendenceForm";
import CardCalendar from "../../components/Cards/CardCalendar";
import { getAuthData } from "../../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

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
          <AttendenceForm isSubmitted={true} attendanceData={todaysAttendance}
          />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCalendar scheduleData={mySchedule} isLoading={isLoading} setDate={setDate} />
        </div>
      </div>
    </>
  );
}
