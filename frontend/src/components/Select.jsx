const Select = ({ statusList, onChange, defaultValue }) => {
  return (
    <select
      name="applicationStatus"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {statusList.map((status, id) => {
        return (
          <option key={id} value={status}>
            {status}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
