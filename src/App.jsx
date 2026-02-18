import { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

import Applications from "./services/applications";
import ApplicationsList from "./components/ApplicationsList";
import Detail from "./components/Detail";

const App = () => {
  const [applications, setApplications] = useState([]);
  const [view, setView] = useState("list");
  const [currentApplication, setCurrentApplication] = useState(null);
  const [newStatus, setNewStatus] = useState(null);

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
          alert("The application has already been deleted");
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

    Applications.updateApplication(id, changedApplication).then(
      (updatedApplication) => {
        setApplications(
          applications.map((application) =>
            application.id === id ? updatedApplication : application,
          ),
        );
      },
    );
  };

  return (
    <div>
      {view === "list" && (
        <ApplicationsList
          applications={applications}
          viewApplication={viewApplication}
        />
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
    </div>
  );
};

export default App;
