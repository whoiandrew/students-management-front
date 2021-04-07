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
  return `${day} ${monthNames[month]} ${year} ${hours}:${minutes}`;
};
