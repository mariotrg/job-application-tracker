const ApplicationCard = ({ application, viewApplication }) => {
  return (
    <div className="application_card">
      <h3>{application.position}</h3>
      <h4>{application.company}</h4>
      <p>{application.url}</p>
      <p>{application.applicationStatus}</p>
      <p>{application.applicationDate}</p>

      <button onClick={() => viewApplication(application.id)}>
        View Details
      </button>
    </div>
  );
};

export default ApplicationCard;
