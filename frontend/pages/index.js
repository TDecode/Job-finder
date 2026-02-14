import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div style={{ padding: "50px", fontFamily: "Arial, sans-serif" }}>
      <h1>LinkedIn Job Finder</h1>
      <p>Search for jobs by keyword or category:</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g., Software Engineer"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "300px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px" }}>
          Search
        </button>
      </form>
    </div>
  );
}
