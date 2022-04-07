import "./ComboBoxEntry.css";

const ComboBoxEntry = ({ fieldName, options, onChange }) =>
{
    return (
        <div className="ComboBoxEntry">
            <p>{fieldName}:</p>
            <select onChange={e => onChange(e.target.value)}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>

    );
};

export default ComboBoxEntry;
