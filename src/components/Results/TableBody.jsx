import { calculateInvestmentResults,formatter } from "../../util/investment";
import TableRow from "./TableRow";
import TableData from "./TableData";

function TableBody({ userInput }) {
    const result = calculateInvestmentResults(userInput);
    const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    return (
        <tbody id="tbody">
            {
                result.map((data) => {
                    const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                    const totalAmountInvested = data.valueEndOfYear = totalInterest
                    return (
                        <TableRow key={data.year}>
                            <TableData title={data.year}></TableData>
                            <TableData title={formatter.format(data.valueEndOfYear)}></TableData>
                            <TableData title={formatter.format(data.interest)}></TableData>
                            <TableData title={formatter.format(totalInterest)}></TableData>
                            <TableData title={formatter.format(totalAmountInvested)}></TableData>
                        </TableRow>
                    )
                })
            }
        </tbody>
    )

}
export default TableBody;