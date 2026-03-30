const Notification = ({ message, notificationStatus }) => {
  if (!message) {
    return null;
  }

  if (notificationStatus === "update") {
    return <p className="notification notification_update">{message}</p>;
  } else if (notificationStatus === "delete") {
    return <p className="notification notification_delete">{message}</p>;
  } else if (notificationStatus === "new") {
    return <p className="notification notification_new">{message}</p>;
  }
};

export default Notification;
