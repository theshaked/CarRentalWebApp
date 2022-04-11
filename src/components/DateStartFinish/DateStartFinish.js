import "./DateStartFinish.css";
import TextEntry from "../TextEntry/TextEntry";
import { useState, useEffect } from 'react'


const DateStartFinish = ({ setValidDates, setStartDate, setFinishDate }) =>
{
    const [start, setStart] = useState();
    const [finish, setFinish] = useState();

    const ValidateDateRanges = (start, finish) =>
    {
        return Date.now() <= start?.getTime()
            && start?.getTime() < finish?.getTime();
    };

    useEffect(() =>
    {
        setStartDate(start);
        setFinishDate(finish);

        setValidDates(ValidateDateRanges(start, finish));
    }, [start, finish])

    return (
        <div className="DateStartFinish">
            <TextEntry required={true} fieldName="Start" fieldType="date" onChange={e => setStart(new Date(e))} />
            <TextEntry required={true} fieldName="Finish" fieldType="date" onChange={e => setFinish(new Date(e))} />
        </div>
    );
};

export default DateStartFinish;
