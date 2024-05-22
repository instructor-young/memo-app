export function formatDateTime(dateTime, longOrShort) {
  const date = dateTime ? new Date(dateTime) : new Date();
  const isAfterNoon = date.getHours() >= 12;

  if (longOrShort === "short") {
    return `${isAfterNoon ? "오후" : "오전"} ${new Date(
      date
    ).getHours()}:${String(new Date(date).getMinutes())}`;
  } else if (longOrShort === "long") {
    return `${date.getFullYear()}년 ${
      date.getMonth() + 1
    }월 ${date.getDate()}일, ${
      isAfterNoon ? "오후" : "오전"
    } ${date.getHours()}:${date.getMinutes()}`;
  } else {
    return alert("wrong args");
  }
}
