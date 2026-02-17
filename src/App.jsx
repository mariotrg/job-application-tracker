import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import ApplicationsList from "./components/ApplicationsList";
import Detail from "./components/Detail";

const App = () => {
  const [applications, setApplications] = useState([]);
  const [view, setView] = useState("list");
  const [currentApplication, setCurrentApplication] = useState(null);

  const selectedApplication = applications.find(
    (application) => application.id === currentApplication || null,
  );

  useEffect(() => {
    axios.get("http://localhost:3000/applications").then((response) => {
      setApplications(response.data);
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

  return (
    <div>
      {view === "list" && (
        <ApplicationsList
          applications={applications}
          viewApplication={viewApplication}
        />
      )}

      {view === "application" && (
        <Detail application={selectedApplication} handleBack={handleBack} />
      )}
    </div>
  );
};

export default App;
