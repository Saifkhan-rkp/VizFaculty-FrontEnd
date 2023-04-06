import AttendenceForm from "../../components/AttendenceForm/AttendenceForm";
import CardCalendar from "../../components/Cards/CardCalendar";

export default function DashboardIndexFaculty() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <AttendenceForm />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardCalendar />
        </div>
      </div>
    </>
  );
}
