import "./TextEntry.css";

const TextEntry = ({ regex, fieldKey, fieldName, fieldType, minLength, maxLength, validityMsg, required }) =>
{
    return (
        <div className="TextEntry">
            <p>{fieldName}:</p>
            <input required={required} type={fieldType} name={fieldKey} pattern={regex} minLength={minLength} maxLength={maxLength}
                title={validityMsg} />
        </div>

    );
};

export default TextEntry;
