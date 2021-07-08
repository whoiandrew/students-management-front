import { useLocation } from "react-router-dom";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const parseISOStringDate = (dateISO) => {
  const date = new Date(dateISO);
  const [year, month, day, hours, minutes] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];

  const fillToTwoNums = (dateValue) => {
    if (typeof dateValue === "number") {
      return dateValue.toString().length < 2
        ? dateValue.toString().padStart(2, "0")
        : dateValue;
    }
    return dateValue;
  };

  return `${day} ${monthNames[month]} ${year} ${fillToTwoNums(
    hours
  )}:${fillToTwoNums(minutes)}`;
};

export const useLastSegmentOfLocation = () => {
  const location = useLocation().pathname.split("/");
  return location[location.length - 1];
};
