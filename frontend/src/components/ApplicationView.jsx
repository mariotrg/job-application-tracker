import Button from "./Button";
import Notification from "./Notification";

const ApplicationView = ({
  selected,
  onBack,
  onDelete,
  onClick,
  statusList,
  message,
  notificationStatus,
}) => {
  return (
    <div>
      <div>
        <Button text="back" onClick={onBack} />
        <Button text="delete" onClick={() => onDelete(selected.id)} />{" "}
      </div>
      <Notification message={message} notificationStatus={notificationStatus} />
      <p>{selected.position}</p>
      <p>{selected.company}</p>
      <p>{selected.url}</p>
      <div>
        {statusList.map((status, id) => {
          return (
            <Button
              key={id}
              text={status}
              onClick={() => onClick(selected, selected.id, status)}
            />
          );
        })}
      </div>
      <p>{selected.applicationDate}</p>
      <p>{selected.applicationStatus}</p>
    </div>
  );
};

export default ApplicationView;
