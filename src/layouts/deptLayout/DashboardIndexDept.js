import CardPerformanceGraph from "../../components/Cards/CardPerformanceGraph";
import CardTimetables from "../../components/Cards/CardTimetables";


export default function DashboardIndexDept() {
    return (<>
        <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardPerformanceGraph/>
            </div>
            <div className="w-full xl:w-4/12 px-4">
                <CardTimetables />
            </div>
        </div>
    </>);
}