import './index.scss';
const UserLog = () => {
  return (
    <div className="user-log">
      <div className="user-log-text">
        <span className="log-time">22:35</span>
        <p className="log-text">
          Image ID: <span>fQSunHvl8</span> was added to Favourites
        </p>
      </div>
      <span className="log-icon icon-heart"></span>
    </div>
  );
};
export default UserLog;
