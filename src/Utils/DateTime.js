export const DaysBetweenDates = (dateStart, dateFinish) =>
{
    return (dateFinish.getTime() - dateStart.getTime()) / (1000 * 3600 * 24);
};
