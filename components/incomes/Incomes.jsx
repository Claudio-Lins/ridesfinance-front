import IncomeBox from "./IncomeBox";

export default function Incomes(){
    return(
        <>
            <div className="flex justify-evenly">
                <IncomeBox id="incomeToday"  title="Today" amount='499,00 €'/>
                <IncomeBox id="incomeweek" title="Week" amount='900,00 €'/>
                <IncomeBox id="incomeMonth" title="Month" amount='3.999,00 €'/>
            </div>
        </>
    )
}