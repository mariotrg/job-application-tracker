const Detail = ({ application, handleBack }) => {
  return (
    <div>
      <button onClick={handleBack}>back</button>
      <h3>{application.position}</h3>
      <h4>{application.company}</h4>
      <p>{application.url}</p>
      <p>{application.applicationStatus}</p>
      <p>{application.applicationDate}</p>
    </div>
  );
};

export default Detail;
