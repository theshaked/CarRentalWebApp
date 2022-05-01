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
            <input required type="date" onChange={e => setStart(new Date(e.target.value))} min={new Date(new Date().getTime() + 86400000).toISOString().split('T')[0]} />
            <p>till</p>
            <input required type="date" onChange={e => setFinish(new Date(e.target.value))} min={start?.toISOString().split('T', 1)[0]} />

        </div>
    );
};

export default DateStartFinish;
