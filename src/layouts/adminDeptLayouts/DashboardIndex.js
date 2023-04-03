import CardExpenceTable from "../../components/Cards/CardExpenceTable";
import CardWhatever from "../../components/Cards/CardWhatever";

export default function DashboardIndexAD() {
    return (<>
        <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardExpenceTable />
            </div>
            <div className="w-full xl:w-4/12 px-4">
                <CardWhatever />
            </div>
        </div>
    </>);
}