import React, { useState } from "react";

const Middle = () => {
  const [search, setSearch] = useState<string>();
  return (
    <div className="middleBoard">
      <div className="input">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Middle;
