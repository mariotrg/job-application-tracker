import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/applications").then((response) => {
      setApplications(response.data);
    });
  }, []);

  return (
    <div>
      {applications.map((item) => (
        <p key={item.id}>{item.position}</p>
      ))}
    </div>
  );
};

export default App;
