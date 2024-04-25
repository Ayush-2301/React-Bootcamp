import React, { useState } from "react";

const EventHandling = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      {value}
    </div>
  );
};

export default EventHandling;
