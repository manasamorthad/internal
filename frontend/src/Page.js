import { useState } from "react";

 function Page() {
  const students = [
    { name: "Aarav", marks: 85 },
    { name: "Isha", marks: 92 },
    { name: "Rohan", marks: 76 },
    { name: "Meera", marks: 88 },
    { name: "Kiran", marks: 81 },
    { name: "Neha", marks: 90 }
  ];

  const [page, setPage] = useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(students.length / perPage);
  const start = (page - 1) * perPage;
  const current = students.slice(start, start + perPage);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student List</h2>

      {current.map((s, i) => (
        <p key={i}>
          {s.name} - {s.marks}
        </p>
      ))}

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Page;
