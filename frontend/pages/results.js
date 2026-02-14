import { useRouter } from "next/router";
import JobCard from "../components/JobCard";

export default function Results() {
  const router = useRouter();
  const { query } = router.query;

  // Placeholder jobs (we will replace with API fetch later)
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      type: "company", // or "human"
      location: "Bangalore, India",
      link: "#",
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "John Doe",
      type: "human",
      location: "Remote",
      link: "#",
    },
  ];

  const companyJobs = jobs.filter((job) => job.type === "company");
  const humanJobs = jobs.filter((job) => job.type === "human");

  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>Search results for: {query}</h1>

      <h2>Company Posted Jobs</h2>
      {companyJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}

      <h2>Human Posted Jobs</h2>
      {humanJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

