import ApplicationCard from "./ApplicationCard";

const ApplicationsList = ({ applications }) => {
  return (
    <div className="application_list">
      {applications.map((application) => {
        return ApplicationCard(application);
      })}
    </div>
  );
};

export default ApplicationsList;
