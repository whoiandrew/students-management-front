const ScheduleItem = ({lesson}) => {
  const {lesson_name, day_name, teacher_name, time_start, time_end} = lesson;
  return(<>
    <p>{lesson_name}</p>
    <p>Teacher: {teacher_name}</p>
    <p>Time {time_start} - {time_end}</p>
  </>);
}

export default ScheduleItem;