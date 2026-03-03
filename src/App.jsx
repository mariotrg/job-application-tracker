import { useState, useEffect } from "react";
import axios from "axios";

import Applications from "./services/applications";

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
    Applications.getAll().then((allApplications) => {
      setApplications(allApplications);
    });
  }, []);

  const addNewApplication = (e) => {
    e.preventDefault();

    Applications.addNew(newApplication).then((returnedApplication) => {
      setApplications(applications.concat(returnedApplication));
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
