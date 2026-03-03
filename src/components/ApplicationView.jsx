import Button from "./Button";
import Select from "./Select";

const ApplicationView = ({
  selected,
  onBack,
  onDelete,
  onChange,
  statusList,
}) => {
  return (
    <div>
      <Button text="back" onClick={onBack} />
      <p>{selected.position}</p>
      <p>{selected.company}</p>
      <p>{selected.url}</p>
      <Select
        statusList={statusList}
        defaultValue={selected.applicationStatus}
      />

      <p>{selected.applicationDate}</p>

      <Button text="delete" onClick={() => onDelete(selected.id)} />
    </div>
  );
};

export default ApplicationView;
