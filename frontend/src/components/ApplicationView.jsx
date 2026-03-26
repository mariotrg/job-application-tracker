import Button from "./Button";
import Select from "./Select";

const ApplicationView = ({
  selected,
  onBack,
  onDelete,
  onChange,
  statusList,
  onUpdate,
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
        onChange={(e) => onChange(e)}
      />
      <p>{selected.applicationDate}</p>
      <p>{selected.applicationStatus}</p>
      <Button text="delete" onClick={() => onDelete(selected.id)} />{" "}
      <Button text="update" onClick={() => onUpdate(selected, selected.id)} />
    </div>
  );
};

export default ApplicationView;
