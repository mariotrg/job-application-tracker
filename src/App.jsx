import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";

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
    setNewApplication({
      position: "",
      company: "",
      url: "",
      applicationDate: "",
      applicationStatus: "",
      notes: "",
      source: "",
    });
  };

  return (
    <>
      <Form
        onSubmit={addNewApplication}
        onChange={handleInputChange}
        newApplication={newApplication}
      />

      <div>
        {applications.map((item) => (
          <p key={item.id}>{item.position}</p>
        ))}
      </div>
    </>
  );
};

export default App;
