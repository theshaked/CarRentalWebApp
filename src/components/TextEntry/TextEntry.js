import "./TextEntry.css";

const TextEntry = ({ regex, fieldName, fieldType, minLength, maxLength, validityMsg, required, onChange, borderless }) =>
{
    return (
        <div className="TextEntry">
            <p>{fieldName}:</p>
            <input className={borderless ? "NoBorder" : "Border"} required={required} onChange={e => onChange(e.target.value)} type={fieldType} pattern={regex} minLength={minLength} maxLength={maxLength}
                title={validityMsg} />
        </div>

    );
};

export default TextEntry;
