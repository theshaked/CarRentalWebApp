import "./ComboBoxEntry.css";

const ComboBoxEntry = ({ fieldKey, fieldName, options }) =>
{
    return (
        <div className="ComboBoxEntry">
            <p>{fieldName}:</p>
            <select name={fieldKey}>
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>

    );
};

export default ComboBoxEntry;
