import ApplicationCard from "./ApplicationCard";

const ApplicationsList = ({ applications, viewApplication }) => {
  return (
    <div className="application_list">
      {applications.map((application) => {
        return (
          <ApplicationCard
            key={application.id}
            application={application}
            viewApplication={viewApplication}
          />
        );
      })}
    </div>
  );
};

export default ApplicationsList;
