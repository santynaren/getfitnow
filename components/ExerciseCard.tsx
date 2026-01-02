import { Exercise } from "../data/workoutData";

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onCheckChange: (checked: boolean) => void;
  delay: number;
}

export default function ExerciseCard({
  exercise,
  isCompleted,
  onCheckChange,
  delay,
}: ExerciseCardProps) {
  return (
    <div
      className={`exercise-card ${isCompleted ? "completed" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="exercise-image-container">
        <img
          src={exercise.imageUrl}
          alt={exercise.name}
          className="exercise-image"
          onError={(e) => {
            // Fallback image if the URL fails to load
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop";
          }}
        />
        <div className="image-overlay" />
      </div>

      <div className="exercise-content">
        <h3 className="exercise-name">{exercise.name}</h3>

        <div className="exercise-details">
          {exercise.sets && exercise.reps && (
            <span className="detail-badge">
              {exercise.sets} sets × {exercise.reps} reps
            </span>
          )}
          {exercise.duration && (
            <span className="detail-badge">{exercise.duration}</span>
          )}
        </div>

        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => onCheckChange(e.target.checked)}
          />
          <span className="checkbox-custom" />
          <span className="checkbox-label">
            {isCompleted ? "Completed ✓" : "Mark Complete"}
          </span>
        </label>
      </div>

      <style jsx>{`
        .exercise-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
          position: relative;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .exercise-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 107, 0, 0.5);
          box-shadow: 0 8px 30px rgba(255, 107, 0, 0.2);
        }

        .exercise-card.completed {
          background: rgba(255, 107, 0, 0.1);
          border-color: rgba(255, 107, 0, 0.5);
        }

        .exercise-card.completed .exercise-image {
          opacity: 0.5;
          filter: grayscale(50%);
        }

        .exercise-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .exercise-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease;
        }

        .exercise-card:hover .exercise-image {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          pointer-events: none;
        }

        .exercise-content {
          padding: 1.5rem;
        }

        .exercise-name {
          font-size: 1.125rem;
          font-weight: 700;
          margin: 0 0 1rem;
          color: #ffffff;
          line-height: 1.3;
        }

        .exercise-details {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .detail-badge {
          background: rgba(255, 107, 0, 0.2);
          color: #ff6b00;
          padding: 0.375rem 0.75rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(255, 107, 0, 0.3);
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          user-select: none;
          padding: 0.75rem;
          margin: -0.75rem;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .checkbox-container:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .checkbox-container input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .checkbox-custom {
          width: 24px;
          height: 24px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 6px;
          position: relative;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .checkbox-container input[type="checkbox"]:checked + .checkbox-custom {
          background: linear-gradient(135deg, #ff6b00 0%, #ff8c00 100%);
          border-color: #ff6b00;
        }

        .checkbox-container
          input[type="checkbox"]:checked
          + .checkbox-custom::after {
          content: "";
          position: absolute;
          left: 7px;
          top: 3px;
          width: 6px;
          height: 11px;
          border: solid #000;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .checkbox-label {
          font-size: 0.9375rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s ease;
        }

        .checkbox-container input[type="checkbox"]:checked ~ .checkbox-label {
          color: #ff6b00;
        }
      `}</style>
    </div>
  );
}
