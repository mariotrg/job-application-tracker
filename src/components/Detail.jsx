const Detail = ({
  application,
  handleBack,
  statusList,
  updateApplication,
  deleteApplication,
  handleSelectChange,
}) => {
  return (
    <div>
      <button onClick={handleBack}>back</button>
      <h3>{application.position}</h3>
      <h4>{application.company}</h4>
      <p>{application.url}</p>
      <p>{application.applicationDate}</p>

      <select
        name="select"
        id="select"
        onChange={handleSelectChange}
        defaultValue={application.applicationStatus}
      >
        {statusList.map((status, id) => {
          return (
            <option key={id} value={status}>
              {status}
            </option>
          );
        })}
      </select>

      <div>
        <button onClick={() => deleteApplication(application.id)}>
          Delete
        </button>
        <button onClick={() => updateApplication(application.id)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Detail;
