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
  const [view, setView] = useState("list");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [newStatus, setNewStatus] = useState(null);

  const statusList = [
    "Applied",
    "Interviewing",
    "Offer",
    "Rejected",
    "Withdrawn",
  ];

  const currentApplication = applications.find(
    (application) => application.id === selectedApplication || null,
  );

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

  const deleteApplication = (id) => {
    if (window.confirm("do you want to delete this application?")) {
      Applications.deleteApplication(id).then(() => {
        setApplications(
          applications.filter((application) => application.id !== id),
        );
      });
      setView("list");
    }
  };

  const updateApplication = (application, id) => {
    const updatedApplication = {
      ...application,
      applicationStatus: newStatus,
    };

    Applications.updateApplication(id, updatedApplication).then(() => {
      setApplications(
        applications.map((application) =>
          application.id === id ? updatedApplication : application,
        ),
      );
    });
  };

  const handleView = (view) => {
    setView(view);
  };

  const handleClick = (e) => {
    setSelectedApplication(e.id);
  };

  const handleInputChange = (e) => {
    setNewApplication({ ...newApplication, [e.target.name]: e.target.value });
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
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
          statusList={statusList}
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
          selected={currentApplication}
          onBack={() => {
            (setSelectedApplication(null), setView("list"));
          }}
          onDelete={deleteApplication}
          statusList={statusList}
          onChange={handleStatusChange}
          onUpdate={updateApplication}
        />
      )}
    </>
  );
};

export default App;
