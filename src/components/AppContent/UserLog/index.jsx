import './index.scss';
import { nanoid } from 'nanoid';
const UserLog = ({ userAction }) => {
  const logs = userAction.map((action) => {
    if (action.imageId) {
      return (
        <div className="user-log" key={nanoid()}>
          <div className="user-log-text">
            <span className="log-time">
              {action.time[0]}:{action.time[1] < 10 ? '0' + action.time[1] : action.time[1]}
            </span>
            <p className="log-text">
              Image ID: <span>{action.imageId}</span> was {action.voteAction} {action.voteDir}
            </p>
          </div>
          <span className={`log-icon ${action.iconClass}`}></span>
        </div>
      );
    }
  });

  return logs;
};
export default UserLog;
