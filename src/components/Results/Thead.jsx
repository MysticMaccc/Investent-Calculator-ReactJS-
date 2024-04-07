import TableHead from "./TableHead"
import TableRow from "./TableRow"

function Thead({ children }) {
    return (
        <thead id="thead">
            <TableRow>
                <TableHead title="Year" />
                <TableHead title="Investment Value" />
                <TableHead title="Interest (Year)" />
                <TableHead title="Total Interest" />
                <TableHead title="Invested Capital" />
            </TableRow>
        </thead>
    )
}
export default Thead;