import Button from "./Button";

const Form = ({ onSubmit, onChange, newApplication }) => {
  return (
    <form action="" onSubmit={onSubmit}>
      <div>
        <label htmlFor="position">position</label>
        <input
          type="text"
          name="position"
          id=""
          onChange={onChange}
          value={newApplication.position}
        />
      </div>
      <div>
        <label htmlFor="company">company</label>
        <input
          type="text"
          name="company"
          id=""
          onChange={onChange}
          value={newApplication.company}
        />
      </div>
      <div>
        <label htmlFor="url">url</label>
        <input
          type="text"
          name="url"
          id=""
          onChange={onChange}
          value={newApplication.url}
        />
      </div>
      <div>
        <label htmlFor="applicationDate">date</label>
        <input
          type="date"
          name="applicationDate"
          id=""
          onChange={onChange}
          value={newApplication.applicationDate}
        />
      </div>
      <div>
        <label htmlFor="applicationStatus">status</label>
        <select
          name="applicationStatus"
          id=""
          onChange={onChange}
          defaultValue="applied"
        >
          <option value="applied">applied</option>
          <option value="wishlist">whishlist</option>
          <option value="interviewing">interviewing</option>
          <option value="rejected">rejected</option>
          <option value="offer">offer</option>
          <option value="withdrawn">withdrawn</option>
        </select>
      </div>
      <div>
        <label htmlFor="source">source</label>
        <input
          type="text"
          name="source"
          id=""
          onChange={onChange}
          value={newApplication.source}
        />
      </div>
      <div>
        <label htmlFor="notes" onChange={onChange}>
          notes
        </label>
        <textarea
          name="notes"
          id=""
          onChange={onChange}
          value={newApplication.notes}
        ></textarea>
      </div>

      <Button text="add new application" />
    </form>
  );
};

export default Form;
