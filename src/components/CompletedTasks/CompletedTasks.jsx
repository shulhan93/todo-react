import arrowIcon from "../../assets/icons/arrow.svg";
import checkIcon from "../../assets/icons/check.svg";
import deleteIcon from "../../assets/icons/delete.svg";

const CompletedTasks = () => {
  return (
    <div className="completed-count">
      <div className="completed-tasks-title">
        <span>Completed (5)</span>
        <img src={arrowIcon} />
      </div>
      <div className="completed-task-list">
        <li className="completed-task">
          <img src={checkIcon} />
          <div className="completed-task-title">Something did</div>
          <img src={deleteIcon} />
        </li>
      </div>
    </div>
  );
};

export default CompletedTasks;
