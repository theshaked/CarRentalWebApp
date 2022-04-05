import "./ImgEntry.css";

const ImgEntry = ({ fieldKey, fieldName, required }) =>
{
    return (
        <div className="ImgEntry">
            <p>{fieldName}:</p>
            <input required={required} type="file" name={fieldKey} />
        </div>
    );
};

export default ImgEntry;
