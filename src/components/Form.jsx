const Form = ({
  isOpen,
  onClick,
  statusList,
  onChange,
  onSubmit,
  newApplication,
}) => {
  if (isOpen) {
    return (
      <div className="form_container">
        <div className="form_top">
          <p>New Application</p>
          <button className="form_button" onClick={onClick}>
            X
          </button>
        </div>

        <form action="" onSubmit={onSubmit} className="form">
          <div>
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id=""
              onChange={onChange}
              value={newApplication.position}
            />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id=""
              onChange={onChange}
              value={newApplication.company}
            />
          </div>
          <div>
            <label htmlFor="url">Url</label>
            <input
              type="text"
              name="url"
              id=""
              onChange={onChange}
              value={newApplication.url}
            />
          </div>
          <div>
            <label htmlFor="applicationDate">Date</label>
            <input
              type="date"
              name="applicationDate"
              id=""
              onChange={onChange}
              value={newApplication.applicationDate}
            />
          </div>
          <div>
            <label htmlFor="applicationStatus">Status</label>
            <select
              name="applicationStatus"
              id="select"
              onChange={onChange}
              defaultValue="Applied"
            >
              {statusList.map((status, id) => {
                return (
                  <option key={id} value={status}>
                    {status}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              id=""
              onChange={onChange}
              value={newApplication.notes}
            />
          </div>
          <div>
            <label htmlFor="source">Source</label>
            <input
              type="text"
              name="source"
              id=""
              onChange={onChange}
              value={newApplication.source}
            />
          </div>

          <button>New Application</button>
        </form>
      </div>
    );
  }
};

export default Form;
