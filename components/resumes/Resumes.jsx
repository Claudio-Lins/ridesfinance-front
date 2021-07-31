import ResumeBox from "../resumes/ResumeBox";

export default function Resumes() {
  return (
    <>
      <div className="bg-white rounded-[10px] shadow p-2">
        <h2 className="text-[16pt] text-center text-gray-600 font-semibold border-b">
          Resumes
        </h2>
        <div className=' border-b'>
          <h3 className="text-[10pt] mt-4 text-center text-gray-600 font-semibold">
            Kms
          </h3>
          <div className="flex justify-evenly items-center divide-x divide-gray-300 pb-2">
            <ResumeBox title="Today" kms="299" />
            <ResumeBox title="Week" kms="1299" />
            <ResumeBox title="Montth" kms="10.299" />
            <ResumeBox title="Year" kms="100.299" />
          </div>
        </div>
      </div>
    </>
  );
}
