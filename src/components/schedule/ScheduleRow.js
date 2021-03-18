import ScheduleItem from "./ScheduleItem";

const ScheduleRow = ({ rowLessons, number, weekDays }) => {
  return (
    <tr>
      <td>{number}</td>
      {weekDays.map((day, index) => {
        const lesson = rowLessons.find(item => item.day_name === day);
        return <td key={index}>{lesson && <ScheduleItem key={index} lesson={lesson} />}</td>;
      })}
    </tr>
  );
};

export default ScheduleRow;