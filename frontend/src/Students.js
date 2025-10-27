import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortAsc, sortDesc } from "./store";

function Students() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.list);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student List</h2>
      {students.map((s, i) => (
        <p key={i}>
          {s.name} - {s.marks}
        </p>
      ))}
      <button onClick={() => dispatch(sortAsc())}>Sort Ascending</button>
      <button onClick={() => dispatch(sortDesc())}>Sort Descending</button>
    </div>
  );
}

export default Students;
