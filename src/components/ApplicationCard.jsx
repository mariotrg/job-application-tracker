const ApplicationCard = (application) => {
  return (
    <div className="application_card" key={application.id}>
      <h3>{application.position}</h3>
      <h4>{application.company}</h4>
      <p>{application.url}</p>
      <p>{application.applicationStatus}</p>
      <p>{application.applicationDate}</p>

      <button>View Details</button>
    </div>
  );
};

export default ApplicationCard;
