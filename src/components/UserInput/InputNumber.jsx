function InputNumber({title, handleOnChange}) {
    return (
        <p>
            <label id="label">{title}</label>
            <input type="number" id="input" onChange={handleOnChange} />
        </p>
    )
}
export default InputNumber;