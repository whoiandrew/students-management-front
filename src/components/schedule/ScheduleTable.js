import ScheduleRow from "./ScheduleRow";

const ScheduleTable = ({ lessonRows, weekDays }) => {
  return (
    <table>
      <thead>
          <tr> 
            <th>Number: </th>
          {weekDays.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lessonRows.map((row, index) => {
          return <ScheduleRow weekDays={weekDays} key={index} number={index + 1} rowLessons={row} />;
        })}
      </tbody>
    </table>

  );
};

export default ScheduleTable;