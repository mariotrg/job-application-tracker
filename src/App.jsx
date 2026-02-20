import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

import Applications from "./services/applications";
import ApplicationsList from "./components/ApplicationsList";
import Detail from "./components/Detail";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import Form from "./components/Form";

const App = () => {
  const [applications, setApplications] = useState([]);
  const [view, setView] = useState("home");
  const [currentApplication, setCurrentApplication] = useState(null);
  const [newStatus, setNewStatus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [newApplication, setNewApplication] = useState({
    position: "",
    company: "",
    url: "",
    applicationDate: "",
    applicationStatus: "",
    notes: "",
    source: "",
  });

  const statusList = ["Applied", "Interview", "Offer", "Rejected", "Withdrawn"];

  const selectedApplication = applications.find(
    (application) => application.id === currentApplication || null,
  );

  useEffect(() => {
    Applications.getAll().then((data) => {
      setApplications(data);
    });
  }, []);

  const viewApplication = (id) => {
    setView("application");
    setCurrentApplication(id);
  };

  const handleBack = () => {
    setView("list");
    setCurrentApplication(null);
  };

  const handleSelectChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleViewClick = (view) => {
    setView(view);
  };

  const handleFormView = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleFormChange = (e) => {
    setNewApplication({ ...newApplication, [e.target.name]: e.target.value });
  };

  const addNew = (e) => {
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
    if (window.confirm("Do you want to delete this application?")) {
      Applications.deleteApplication(id)
        .then(() => {
          setApplications(
            applications.filter((application) => application.id !== id),
          );
          handleBack();
        })
        .catch((error) => {
          alert("The application has already been deleted.");
          setApplications(
            applications.filter((application) => application.id !== id),
          );
          handleBack();
        });
    }
  };

  const updateApplication = (id) => {
    const application = applications.find((n) => n.id === id);
    const changedApplication = { ...application, applicationStatus: newStatus };

    Applications.updateApplication(id, changedApplication)
      .then((updatedApplication) => {
        setApplications(
          applications.map((application) =>
            application.id === id ? updatedApplication : application,
          ),
        );
      })
      .catch((error) => {
        alert("The application does not exist anymore.");
        setApplications(
          applications.filter((application) => application.id !== id),
        );
        handleBack();
      });
    setNewStatus(null);
  };

  return (
    <>
      <Header />
      <main>
        {view === "home" && (
          <>
            <Dashboard />
            <Button
              onClick={handleFormView}
              text={"+"}
              style="add_new_button"
            />
          </>
        )}

        {view === "list" && (
          <>
            <ApplicationsList
              applications={applications}
              viewApplication={viewApplication}
            />
            <Button
              onClick={handleFormView}
              text={"+"}
              style="add_new_button"
            />
          </>
        )}

        {view === "application" && (
          <Detail
            application={selectedApplication}
            handleBack={handleBack}
            statusList={statusList}
            deleteApplication={deleteApplication}
            updateApplication={updateApplication}
            handleSelectChange={handleSelectChange}
            newStatus={newStatus}
          />
        )}
      </main>

      <Navigation handleViewClick={handleViewClick} />
      <Form
        isOpen={isOpen}
        onClick={handleFormClose}
        statusList={statusList}
        onChange={handleFormChange}
        onSubmit={addNew}
        newApplication={newApplication}
      />
    </>
  );
};

export default App;
