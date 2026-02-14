export default function JobCard({ job }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{job.title}</h3>
      <p><strong>Company/Person:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        View Job
      </a>
    </div>
  );
}
