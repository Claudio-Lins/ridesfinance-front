import IncomeBox from "./IncomeBox";

export default function Incomes(){
    return(
        <>
            <div className="flex justify-evenly">
                <IncomeBox title="Today" amount='199,00 €'/>
                <IncomeBox title="Week" amount='900,00 €'/>
                <IncomeBox title="Month" amount='3.999,00 €'/>
            </div>
        </>
    )
}