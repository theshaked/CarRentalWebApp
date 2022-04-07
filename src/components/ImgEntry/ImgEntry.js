import "./ImgEntry.css";

const ImgEntry = ({ fieldName, required, onChange }) =>
{
    return (
        <div className="ImgEntry">
            <p>{fieldName}:</p>
            <input required={required} type="file" onChange={e => onChange(e.target.value)} />
        </div>
    );
};

export default ImgEntry;
