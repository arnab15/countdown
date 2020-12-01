import React, { useEffect, useRef, useState } from "react";
import SocialIcon from "../socialicons/Socialicon";
import classes from "./remainingDaysCountDown.module.css";
const RemainingDaysCountdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("Jan 19, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = countdownDate - now;
      var days = Math.floor(difference / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((difference % (1000 * 60)) / 1000);
      if (difference < 0) {
        //
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className={`${classes.container}`}>
      <h1 className="text-center">The Workable</h1>
      <h4 className="text-center">
        <span>We'll Be</span> <span>LIVE</span> <span>in!</span>
      </h4>
      <div className={`col ${classes.dateCountingContainer}`}>
        <div className={`${classes.timerDetails}`}>
          <div>{timerDays >= 10 ? timerDays : `0${timerDays}`}</div>
          <p>Days</p>
        </div>
        <div className={classes.colon}>:</div>
        <div className={`${classes.timerDetails}`}>
          <div>{timerHours >= 10 ? timerHours : `0${timerHours}`}</div>
          <p>Hours</p>
        </div>
        <div className={classes.colon}>:</div>
        <div className={`${classes.timerDetails}`}>
          <div>{timerMinutes >= 10 ? timerMinutes : `0${timerMinutes}`}</div>
          <p>Minutes</p>
        </div>
        <div className={classes.colon}>:</div>
        <div className={`${classes.timerDetails}`}>
          <div>{timerSeconds >= 10 ? timerSeconds : `0${timerSeconds}`}</div>
          <p>Seconds</p>
        </div>
      </div>
      <div className="col">
        <div className={classes.socialContainer}>
          <div>
            <SocialIcon
              size="2x"
              socialName="linkedin"
              link="https://www.linkedin.com/company/the-workable"
            />
          </div>
          <div>
            <SocialIcon size="2x" socialName="twitter" link="#" />
          </div>
          <div>
            <SocialIcon size="2x" socialName="instagram" link="#" />
          </div>
          <div>
            <SocialIcon size="2x" socialName="facebook" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemainingDaysCountdown;
