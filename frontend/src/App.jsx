import { useState, useEffect } from "react";

import Applications from "./services/applications";

import "./index.css";

import Button from "./components/Button";
import Form from "./components/Form";
import ApplicationView from "./components/ApplicationView";
import Notification from "./components/Notification";

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
  const [message, setMessage] = useState(null);
  const [notificationStatus, setNotificationStatus] = useState(null);

  const statusList = [
    "Applied",
    "Interviewing",
    "Offer",
    "Rejected",
    "Withdrawn",
    "No response",
  ];

  const currentApplication = applications.find(
    (application) => application.id === selectedApplication || null,
  );

  useEffect(() => {
    Applications.getAll()
      .then((allApplications) => {
        setApplications(allApplications);
      })
      .catch((error) => console.log(error.response.data.error));
  }, []);

  const addNewApplication = (e) => {
    e.preventDefault();

    Applications.addNew(newApplication)
      .then((returnedApplication) => {
        setApplications(applications.concat(returnedApplication));
        setView("list");
        setNotificationStatus("new");
        setMessage("new job application added");

        setTimeout(() => {
          setMessage(null);
          setNotificationStatus(null);
        }, 3000);
      })
      .catch((error) => console.log(error.response.data.error));

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
      Applications.deleteApplication(id)
        .then(() => {
          setApplications(
            applications.filter((application) => application.id !== id),
          );
          setMessage("application deleted");
          setNotificationStatus("delete");
          setTimeout(() => {
            setMessage(null);
            setNotificationStatus(null);
          }, 3000);
        })
        .catch((error) => console.log(error.response.data.error));
      setView("list");
    }
  };

  const updateApplication = (application, id, status) => {
    const updatedApplication = {
      ...application,
      applicationStatus: status,
    };

    Applications.update(id, updatedApplication)
      .then(() => {
        setApplications(
          applications.map((application) =>
            application.id === id ? updatedApplication : application,
          ),
        );
        setMessage("application status updated");
        setNotificationStatus("update");
        setTimeout(() => {
          setMessage(null);
          setNotificationStatus(null);
        }, 3000);
      })
      .catch((error) => console.log(error.response.data.error));
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

  return (
    <>
      <aside>
        <nav className="navigation">
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
      </aside>

      <main>
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
            <Notification
              message={message}
              notificationStatus={notificationStatus}
            />
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
            onClick={updateApplication}
            message={message}
            notificationStatus={notificationStatus}
          />
        )}
      </main>
    </>
  );
};

export default App;
