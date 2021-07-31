import Bar from "./Bar";
import Icon from "./Icon";

export default function IncomeBox(props) {
    return(
        <>
            <div className="bg-white rounded-md shadow w-[95px] h-[69px] px-1 pb-1 flex flex-wrap content-between">
                <div className="flex flex-auto justify-between items-center">
                    <div className="text-xs text-gray-500">{props.title}</div>
                    <div><Icon /></div>
                </div>
                <div className="flex flex-auto h-[34px] justify-between items-end">
                    <div className="text-[14px] tracking-tight font-medium text-blue-800">{props.amount}</div>
                    <Bar barColor="barBlue" />
                </div>
            </div>
        </>
    )
}