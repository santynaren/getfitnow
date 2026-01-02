import { useState, useEffect } from "react";

interface TimerProps {
  active: boolean;
  startTime: number | null;
}

export default function Timer({ active, startTime }: TimerProps) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!active || !startTime) {
      //   setElapsed(0);
      return;
    }

    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [active, startTime]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <div className="timer-value">{formatTime(elapsed)}</div>
      <div className="timer-label">
        {active ? "WORKOUT TIME" : "NOT STARTED"}
      </div>

      <style jsx>{`
        .timer-container {
          text-align: center;
        }

        .timer-value {
          font-size: 2rem;
          font-weight: 900;
          color: #ff6b00;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.5px;
          margin-bottom: 0.25rem;
          text-shadow: 0 0 20px rgba(255, 107, 0, 0.3);
        }

        .timer-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
