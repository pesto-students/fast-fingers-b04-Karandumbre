import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ time }) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={time}
      onComplete={() => {
        return [true, 1500]; // repeat animation in 1.5 seconds
      }}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};
export default Timer;
