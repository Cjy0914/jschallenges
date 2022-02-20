const dDayBox = document.querySelector("#dday");

function getTime() {
  const today = new Date();
  const dDay = new Date(`${new Date().getFullYear()}-09-10:19:00:00+0900`);
  const differ = dDay - today;

  const dDays = Math.floor(differ / (1000 * 60 * 60 * 24));
  const dDayHoursInMS = Math.floor(differ / (1000 * 60 * 60));
  const dDayMinutesInMS = Math.floor(differ / (1000 * 60));
  const dDaySecondsInMs = Math.floor(differ / 1000);

  const seconds = String(dDaySecondsInMs % 60).padStart("0", 2);
  const minutes = String(dDayMinutesInMS % 60).padStart("0", 2);
  const hours = String(dDayHoursInMS % 24).padStart("0", 2);

  dDayBox.innerText = ` ${dDays}-day ${hours}h ${minutes}m ${seconds}s`;
}

getTime();
setInterval(getTime, 1000);
