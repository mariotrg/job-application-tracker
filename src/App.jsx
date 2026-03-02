import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [applications, setApplications] = useState([]);
  const [newApplication, setNewApplication] = useState({
    position: "",
    company: "",
    url: "",
    applicationDate: "",
    applicationStatus: "",
    notes: "",
    source: "",
  });

  const handleInputChange = (e) => {
    setNewApplication({ ...newApplication, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/applications").then((response) => {
      setApplications(response.data);
    });
  }, []);

  const addNewApplication = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/applications", newApplication)
      .then((response) => {
        setApplications(applications.concat(response.data));
        console.log(response.data);
      });
  };

  return (
    <>
      <form action="" onSubmit={addNewApplication}>
        <div>
          <label htmlFor="position">position</label>
          <input
            type="text"
            name="position"
            id=""
            onChange={handleInputChange}
            value={newApplication.position}
          />
        </div>
        <div>
          <label htmlFor="company">company</label>
          <input
            type="text"
            name="company"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="url">url</label>
          <input type="text" name="url" id="" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="applicationDate">date</label>
          <input
            type="date"
            name="applicationDate"
            id=""
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="applicationStatus">status</label>
          <select
            name="applicationStatus"
            id=""
            defaultValue="applied"
            onChange={handleInputChange}
          >
            <option value="applied">applied</option>
            <option value="whishlist">whishlist</option>
            <option value="interviewing">interviewing</option>
            <option value="rejected">rejected</option>
            <option value="offer">offer</option>
            <option value="withdrawn">withdrawn</option>
          </select>
        </div>
        <div>
          <label htmlFor="source">source</label>
          <input type="text" name="source" id="" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="notes" onChange={handleInputChange}>
            notes
          </label>
          <textarea name="notes" id="" onChange={handleInputChange}></textarea>
        </div>

        <button>add new application</button>
      </form>

      <div>
        {applications.map((item) => (
          <p key={item.id}>{item.position}</p>
        ))}
      </div>
    </>
  );
};

export default App;
