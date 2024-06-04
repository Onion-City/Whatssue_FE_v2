import "./ScheduleBox.css";

export const SkeletonScheduleBox = () => {
  return (
    <div className="skeleton-item">
      <div className="skeleton-info element">
          <div className="skeleton-name"></div>
          <div className="skeleton-email"></div>
          <div className="skeleton-attend"></div>
      </div>
    </div>
  )
}