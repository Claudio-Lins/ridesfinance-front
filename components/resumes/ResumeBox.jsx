import Bar from "../incomes/Bar";
import Icon from "../incomes/Icon";

export default function ResumeBox(props) {
  return (
    <>
      <div className="bg-white mt-1 w-auto h-[60px] p-2 space-y-3">
        <div className="text-xs text-gray-500">{props.title}</div>
        <div className="text-[14px] tracking-tight font-medium text-blue-800">
          {props.kms}
        </div>
      </div>
    </>
  );
}
