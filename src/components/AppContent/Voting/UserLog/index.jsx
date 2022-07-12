import './index.scss';
const UserLog = ({ userAction }) => {
  const logs = userAction.map((action) => {
    if (action.imageId) {
      return (
        <div className="user-log" key={action.imageId}>
          <div className="user-log-text">
            <span className="log-time">
              {action.time[0]}:{action.time[1]}
            </span>
            <p className="log-text">
              Image ID: <span>{action.imageId}</span> was added to {action.voteDir}
            </p>
          </div>
          <span className={`log-icon ${action.iconClass}`}></span>
        </div>
      );
    }

	if(userAction.length > 5){
		
	}

    console.log(userAction.length);
  });

  return logs;
};
export default UserLog;
