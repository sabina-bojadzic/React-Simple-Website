import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calend() {
  let now = new Date().toLocaleTimeString();
  let [time, show] = useState(now);
  setInterval(setTime, 1000);

  function setTime() {
    let nowTime = new Date().toLocaleTimeString();
    show(nowTime);
  }

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>{time}</h1>
      <br />
      <Calendar className="cale" onChange={onChange} value={value} />
    </div>
  );
}

export default Calend;
