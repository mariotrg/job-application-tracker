import Button from "./Button";

const ApplicationView = ({ selected, onBack, onDelete }) => {
  return (
    <div>
      <Button text="back" onClick={onBack} />
      <p>{selected.position}</p>
      <p>{selected.company}</p>
      <p>{selected.url}</p>
      <p>{selected.applicationStatus}</p>
      <p>{selected.applicationDate}</p>

      <Button text="delete" onClick={() => onDelete(selected.id)} />
    </div>
  );
};

export default ApplicationView;
