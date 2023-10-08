import { useEffect, useRef, useState } from 'react';

export default function Timer({ min, sec, stopTimerDate, onTimerUnmount }) {
  const [timer, setTimer] = useState({ min, sec, run: false });
  const { run } = timer;
  const InterRef = useRef(null);

  const startTimer = () => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      run: true,
    }));
  };

  const pauseTimer = () => {
    setTimer((prevTimer) => ({
      ...prevTimer,
      run: false,
    }));
  };

  const tickFunc = () => {
    setTimer((prevTimer) => {
      let { sec, min, run } = prevTimer;

      if (min <= 0 && sec <= 0) {
        run = false;
      } else if (sec === 0 || !sec) {
        min = min - 1;
        sec = 60;
      }
      sec = sec - 1;
      return { sec, min, run };
    });
  };

  useEffect(() => {
    if (run) {
      InterRef.current = setInterval(tickFunc, 1000);
    }
    return () => {
      clearInterval(InterRef.current);
    };
  }, [run]);

  useEffect(() => {
    if (stopTimerDate && (min || sec)) {
      // console.log(stopTimerDate)
      const diffDate = new Date(Date.now() - stopTimerDate);
      const diffMin = diffDate.getMinutes();
      const diffSec = diffDate.getSeconds();

      setTimer((prevTimer) => ({
        ...prevTimer,
        run: true,
        min: Math.max(min - diffMin, 0),
        sec: Math.max(sec - diffSec, 0),
      }));
    } else {
      // console.log(min, sec, 'useEff 1')
      setTimer((prevTimer) => ({
        ...prevTimer,
        min,
        sec,
      }));
    }

    return () => {
      onTimerUnmount(timer, stopTimerDate);
    };
  }, []);

  return (
    <span className="description">
      <button type="button" label="play" className="icon icon-play" onClick={startTimer} />
      <button type="button" label="pause" className="icon icon-pause" onClick={pauseTimer} />
      <span className="timer-display">
        {String(timer.min).padStart(2, '0')}:{String(timer.sec).padStart(2, '0')}
      </span>
    </span>
  );
}
