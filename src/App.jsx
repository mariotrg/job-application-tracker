import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import ApplicationsList from "./components/ApplicationsList";

const App = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/applications").then((response) => {
      setApplications(response.data);
    });
  }, []);

  return (
    <div>
      <ApplicationsList applications={applications} />
    </div>
  );
};

export default App;
