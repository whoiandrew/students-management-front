export const ScheduleItem = ({lesson}) => {
  const {lesson_name, day_name, teacher_name, time_start, time_end} = lesson;
  return(<div>
    <p>Lesson: {lesson_name}</p>
    <p>Day: {day_name}</p>
    <p>Teacher: {teacher_name}</p>
    <p>Begin: {time_start}</p>
    <p>End: {time_end}</p>
    <hr/>
  </div>);
}