import { useState, useEffect } from "react";

import Applications from "./services/applications";

import Button from "./components/Button";
import Form from "./components/Form";
import ApplicationView from "./components/ApplicationView";

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
  const [view, setView] = useState("home");
  const [selectedApplication, setSelectedApplication] = useState(null);

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

  const handleView = (view) => {
    setView(view);
  };

  const handleClick = (e) => {
    setSelectedApplication(e);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Button text="dashboard" onClick={() => handleView("home")} />
          </li>
          <li>
            <Button text="list" onClick={() => handleView("list")} />
          </li>
          <li>
            <Button text="form" onClick={() => handleView("form")} />
          </li>
        </ul>
      </nav>

      {view === "home" && (
        <>
          <h1>JobTracker</h1>
        </>
      )}

      {view === "form" && (
        <Form
          onSubmit={addNewApplication}
          onChange={handleInputChange}
          newApplication={newApplication}
        />
      )}

      {view === "list" && (
        <div>
          {applications.map((item) => (
            <div key={item.id}>
              <span key={item.id}>{item.position}</span> {""}
              <Button
                text="view more"
                onClick={() => {
                  (handleView("view"), handleClick(item));
                }}
              />
            </div>
          ))}
        </div>
      )}

      {view === "view" && (
        <ApplicationView
          selected={selectedApplication}
          onBack={() => {
            (setSelectedApplication(null), setView("list"));
          }}
        />
      )}
    </>
  );
};

export default App;
