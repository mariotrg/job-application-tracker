import Button from "./Button";

const ApplicationView = ({ selected, onBack }) => {
  return (
    <div>
      <Button text="back" onClick={onBack} />
      <p>{selected.position}</p>
      <p>{selected.company}</p>
      <p>{selected.url}</p>
      <p>{selected.applicationStatus}</p>
      <p>{selected.applicationDate}</p>
    </div>
  );
};

export default ApplicationView;
