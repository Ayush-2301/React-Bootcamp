import React, { useState } from "react";

const UpdateInObject = () => {
  const [obj, setObj] = useState({
    firstName: "Ayush",
    lastName: "Chauhan",
    status: "Single",
  });
  function updateObj() {
    setObj((prev) => {
      if (prev.status === "Single") {
        return { ...prev, status: "Commited" };
      } else {
        return {
          ...prev,
          status: "Single",
        };
      }
    });
  }
  return (
    <div>
      <div>First Name:{obj.firstName}</div>
      <div>Last Name{obj.lastName}</div>
      <div>Status: {obj.status}</div>
      <button onClick={updateObj}>Update Status</button>
      <input type="text" />
    </div>
  );
};

export default UpdateInObject;
