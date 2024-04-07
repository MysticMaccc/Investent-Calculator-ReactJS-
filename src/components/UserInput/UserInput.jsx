import InputGroup from "./InputGroup"
import InputNumber from "./InputNumber"

function UserInput({onChange ,userInput}) {
    return (
        <section id="user-input">
            <InputGroup>
                <InputNumber title="Initial Investment" value={userInput.initialInvestment} handleOnChange={(event) => onChange('initialInvestment', event.target.value)} required />
                <InputNumber title="Annual Investment" value={userInput.annualInvestment} handleOnChange={(event) => onChange('annualInvestment', event.target.value)} required />
            </InputGroup>
            <InputGroup>
                <InputNumber title="Expected Return" value={userInput.expectedReturn} handleOnChange={(event) => onChange('expectedReturn', event.target.value)} required />
                <InputNumber title="Duration" value={userInput.duration} handleOnChange={(event) => onChange('duration', event.target.value)} required />
            </InputGroup>
        </section>
    )
}
export default UserInput;