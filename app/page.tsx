"use client";

import { useState, useEffect } from "react";
import { workoutData, Exercise } from "../data/workoutData";
import ExerciseCard from "../components/ExerciseCard";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";

export default function WorkoutTracker() {
  // Get current day (0 = Sunday, 1 = Monday, etc.) and convert to workout day (1 = Monday, 7 = Sunday)
  const [currentDay, setCurrentDay] = useState<number>(() => {
    const today = new Date().getDay();
    return today === 0 ? 7 : today;
  });
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(
    new Set()
  );
  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  const currentWorkout = workoutData[currentDay];

  if (!currentWorkout) {
    return <div className="loading">Loading...</div>;
  }

  const handleCheckboxChange = (exerciseId: string, checked: boolean) => {
    const newCompleted = new Set(completedExercises);

    if (checked) {
      newCompleted.add(exerciseId);

      // Start timer on first checkbox
      if (completedExercises.size === 0 && !timerActive) {
        setTimerActive(true);
        setStartTime(() => Date.now());
      }
    } else {
      newCompleted.delete(exerciseId);
    }

    setCompletedExercises(newCompleted);
  };

  const totalExercises =
    currentWorkout.exercises.length +
    currentWorkout.cardio.length +
    currentWorkout.core.length;
  const progress = (completedExercises.size / totalExercises) * 100;

  const resetWorkout = () => {
    setCompletedExercises(new Set());
    setTimerActive(false);
    setStartTime(null);
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <div className="day-badge">DAY {currentDay}</div>
        <h1 className="workout-title">{currentWorkout.name}</h1>
        <p className="workout-subtitle">{currentWorkout.description}</p>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">
              {completedExercises.size}/{totalExercises}
            </div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card timer-stat">
            <Timer active={timerActive} startTime={startTime} />
          </div>
        </div>

        <ProgressBar progress={progress} />
      </div>

      <div className="content-wrapper">
        {/* Warm-up Section */}
        <section className="workout-section">
          <h2 className="section-title">
            <span className="section-icon">🔥</span>
            Warm-Up
          </h2>
          <div className="warmup-card">
            <p>Full body warm-up for 10-15 minutes</p>
          </div>
        </section>

        {/* Main Exercises */}
        <section className="workout-section">
          <h2 className="section-title">
            <span className="section-icon">💪</span>
            Main Exercises
          </h2>
          <div className="exercise-grid">
            {currentWorkout.exercises.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.has(exercise.id)}
                onCheckChange={(checked) =>
                  handleCheckboxChange(exercise.id, checked)
                }
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Cardio Section */}
        <section className="workout-section">
          <h2 className="section-title">
            <span className="section-icon">🏃</span>
            Cardio
          </h2>
          <div className="exercise-grid">
            {currentWorkout.cardio.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.has(exercise.id)}
                onCheckChange={(checked) =>
                  handleCheckboxChange(exercise.id, checked)
                }
                delay={(currentWorkout.exercises.length + index) * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Core Exercises */}
        <section className="workout-section">
          <h2 className="section-title">
            <span className="section-icon">🎯</span>
            Core Work
          </h2>
          <div className="exercise-grid">
            {currentWorkout.core.map((exercise, index) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isCompleted={completedExercises.has(exercise.id)}
                onCheckChange={(checked) =>
                  handleCheckboxChange(exercise.id, checked)
                }
                delay={
                  (currentWorkout.exercises.length +
                    currentWorkout.cardio.length +
                    index) *
                  0.1
                }
              />
            ))}
          </div>
        </section>

        {/* Cool Down */}
        <section className="workout-section">
          <h2 className="section-title">
            <span className="section-icon">🧘</span>
            Cool Down & Stretches
          </h2>
          <div className="cooldown-grid">
            <div className="cooldown-card">
              <h3>Cobra Stretch</h3>
              <p>Hold for 30 seconds</p>
            </div>
            <div className="cooldown-card">
              <h3>Child Pose</h3>
              <p>Hold for 30 seconds</p>
            </div>
          </div>
        </section>

        {completedExercises.size > 0 && (
          <button onClick={resetWorkout} className="reset-button">
            Reset Workout
          </button>
        )}
      </div>

      <style jsx>{`
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .hero-section {
          background: linear-gradient(
            180deg,
            rgba(255, 107, 0, 0.1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
          padding: 3rem 1.5rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 107, 0, 0.2);
        }

        .day-badge {
          display: inline-block;
          background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%);
          color: #000;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 900;
          font-size: 0.875rem;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
        }

        .workout-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          margin: 0.5rem 0;
          background: linear-gradient(135deg, #ffffff 0%, #ff6b00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }

        .workout-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0.5rem 0 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          max-width: 600px;
          margin: 2rem auto;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 107, 0, 0.5);
          transform: translateY(-2px);
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 900;
          color: #ff6b00;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .timer-stat {
          background: linear-gradient(
            135deg,
            rgba(255, 107, 0, 0.1) 0%,
            rgba(255, 107, 0, 0.05) 100%
          );
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .workout-section {
          margin-bottom: 3rem;
          animation: fadeInUp 0.6s ease forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-icon {
          font-size: 1.75rem;
        }

        .warmup-card,
        .cooldown-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .warmup-card:hover,
        .cooldown-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 107, 0, 0.3);
        }

        .warmup-card p {
          margin: 0;
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .exercise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .cooldown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .cooldown-card h3 {
          margin: 0 0 0.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          color: #ff6b00;
        }

        .cooldown-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
        }

        .reset-button {
          display: block;
          margin: 3rem auto 0;
          background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%);
          color: #000;
          border: none;
          padding: 1rem 3rem;
          border-radius: 50px;
          font-weight: 900;
          font-size: 1rem;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
        }

        .reset-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 0, 0.4);
        }

        .reset-button:active {
          transform: translateY(0);
        }

        .loading {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          color: #ff6b00;
          font-size: 1.5rem;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
